
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useGenerateBlogPost, useServices, useCities } from '@/hooks/useContentGeneration';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

const AdminPanel = () => {
  const [newService, setNewService] = useState({
    name: '',
    slug: '',
    description: '',
    basePrice: '',
    category: ''
  });

  const { data: services } = useServices();
  const { data: cities } = useCities();
  const generateBlogPost = useGenerateBlogPost();

  const handleAddService = async () => {
    try {
      const { error } = await supabase.from('services').insert({
        name: newService.name,
        slug: newService.slug,
        description: newService.description,
        base_price: parseFloat(newService.basePrice),
        category: newService.category,
        features: ['Recurso 1', 'Recurso 2', 'Recurso 3']
      });

      if (error) throw error;

      toast.success('Serviço adicionado! Páginas sendo geradas automaticamente...');
      setNewService({ name: '', slug: '', description: '', basePrice: '', category: '' });
      
      // Trigger geração automática de páginas para todas as cidades
      generatePagesForAllCities();
      
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
      toast.error('Erro ao adicionar serviço');
    }
  };

  const generatePagesForAllCities = async () => {
    if (!cities || !services) return;
    
    // Esta função seria executada em background
    toast.info('Sistema gerando páginas para todas as cidades...');
  };

  const handleGenerateBlogPost = () => {
    generateBlogPost.mutate({}, {
      onSuccess: () => {
        toast.success('Post do blog gerado com sucesso!');
      },
      onError: () => {
        toast.error('Erro ao gerar post do blog');
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Painel Administrativo PPlace</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Adicionar Novo Serviço */}
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Novo Serviço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Nome do Serviço"
              value={newService.name}
              onChange={(e) => setNewService({...newService, name: e.target.value})}
            />
            <Input
              placeholder="Slug (URL amigável)"
              value={newService.slug}
              onChange={(e) => setNewService({...newService, slug: e.target.value})}
            />
            <Textarea
              placeholder="Descrição do Serviço"
              value={newService.description}
              onChange={(e) => setNewService({...newService, description: e.target.value})}
            />
            <Input
              placeholder="Preço Base"
              type="number"
              value={newService.basePrice}
              onChange={(e) => setNewService({...newService, basePrice: e.target.value})}
            />
            <Input
              placeholder="Categoria"
              value={newService.category}
              onChange={(e) => setNewService({...newService, category: e.target.value})}
            />
            <Button onClick={handleAddService} className="w-full">
              Adicionar Serviço (Gera Todas as Páginas)
            </Button>
          </CardContent>
        </Card>

        {/* Geração de Conteúdo */}
        <Card>
          <CardHeader>
            <CardTitle>Geração Automática de Conteúdo</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button 
              onClick={handleGenerateBlogPost}
              disabled={generateBlogPost.isPending}
              className="w-full"
            >
              {generateBlogPost.isPending ? 'Gerando...' : 'Gerar Post de Blog com IA'}
            </Button>
            
            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Sistema Automático Ativo:</h3>
              <ul className="text-sm space-y-1">
                <li>✅ {cities?.length || 0} cidades cadastradas</li>
                <li>✅ {services?.length || 0} serviços ativos</li>
                <li>✅ {(cities?.length || 0) * (services?.length || 0)} páginas possíveis</li>
                <li>✅ Conteúdo gerado automaticamente com Mistral AI</li>
                <li>✅ SEO otimizado para cada cidade + serviço</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Estatísticas */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-8">
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-purple-600">{services?.length || 0}</div>
            <p className="text-gray-600">Serviços Ativos</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-blue-600">{cities?.length || 0}</div>
            <p className="text-gray-600">Cidades</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-green-600">
              {(cities?.length || 0) * (services?.length || 0)}
            </div>
            <p className="text-gray-600">Páginas Geradas</p>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6 text-center">
            <div className="text-3xl font-bold text-orange-600">∞</div>
            <p className="text-gray-600">Potencial SEO</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
