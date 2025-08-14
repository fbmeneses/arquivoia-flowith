-- SQL script for ArquivoIA - Etapa 3: Área de Membros

-- Tabela para armazenar os favoritos dos usuários.
-- Cria uma relação muitos-para-muitos entre usuários e ferramentas.
CREATE TABLE user_favorites (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  tool_id INT NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (user_id, tool_id)
);

-- Habilita RLS para a tabela de favoritos.
ALTER TABLE public.user_favorites ENABLE ROW LEVEL SECURITY;

-- Política: Usuários podem ver e gerenciar apenas seus próprios favoritos.
CREATE POLICY "Users can manage their own favorites"
ON public.user_favorites
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


-- Tabela para listas personalizadas criadas pelos usuários.
CREATE TABLE user_lists (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  name TEXT NOT NULL CHECK (char_length(name) > 0),
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- Habilita RLS para a tabela de listas.
ALTER TABLE public.user_lists ENABLE ROW LEVEL SECURITY;

-- Política: Usuários podem gerenciar suas próprias listas.
CREATE POLICY "Users can manage their own lists"
ON public.user_lists
FOR ALL
USING (auth.uid() = user_id)
WITH CHECK (auth.uid() = user_id);


-- Tabela para associar ferramentas a listas personalizadas.
-- Relação muitos-para-muitos entre listas e ferramentas.
CREATE TABLE list_tools (
  list_id UUID NOT NULL REFERENCES user_lists(id) ON DELETE CASCADE,
  tool_id INT NOT NULL REFERENCES tools(id) ON DELETE CASCADE,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  PRIMARY KEY (list_id, tool_id)
);

-- Habilita RLS para a tabela de associação.
ALTER TABLE public.list_tools ENABLE ROW LEVEL SECURITY;

-- Política: Usuários podem adicionar/remover ferramentas de suas próprias listas.
-- A verificação é feita através de um JOIN com user_lists para garantir que o usuário é o dono da lista.
CREATE POLICY "Users can manage tools in their own lists"
ON public.list_tools
FOR ALL
USING (
  EXISTS (
    SELECT 1
    FROM user_lists
    WHERE user_lists.id = list_tools.list_id AND user_lists.user_id = auth.uid()
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1
    FROM user_lists
    WHERE user_lists.id = list_tools.list_id AND user_lists.user_id = auth.uid()
  )
);
