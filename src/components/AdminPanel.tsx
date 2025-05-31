
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useServices, useGenerateBlogPost } from '@/hooks/useContentGeneration';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';

const AdminPanel = () => {
  const [newService, setNewService] = useState({
    name: '',
    slug: '',
    description: '',
    base_price: 0,
    category: '',
    features: [] as string[]
  });
  
  const [newFeature, setNewFeature] = useState('');
  const [blogTopic, setBlogTopic] = useState('');
  const [blogCategory, setBlogCategory] = useState('');
  
  const { data: services, refetch: refetchServices } = useServices();
  const generateBlogPost = useGenerateBlogPost();
  const { toast } = useToast();

  const handleAddService = async () => {
    try {
      const { error } = await supabase
        .from('services')
        .insert([newService]);
      
      if (error) throw error;
      
      toast({
        title: "Serviço adicionado!",
        description: "O serviço foi criado com sucesso. As páginas serão geradas automaticamente.",
      });
      
      setNewService({
        name: '',
        slug: '',
        description: '',
        base_price: 0,
        category: '',
        features: []
      });
      
      refetchServices();
    } catch (error) {
      console.error('Erro ao adicionar serviço:', error);
      toast({
        title: "Erro",
        description: "Erro ao adicionar serviço.",
        variant: "destructive"
      });
    }
  };

  const handleAddFeature = () => {
    if (newFeature.trim()) {
      setNewService(prev => ({
        ...prev,
        features: [...prev.features, newFeature.trim()]
      }));
      setNewFeature('');
    }
  };

  const handleRemoveFeature = (index: number) => {
    setNewService(prev => ({
      ...prev,
      features: prev.features.filter((_, i) => i !== index)
    }));
  };

  const handleGenerateBlogPost = () => {
    generateBlogPost.mutate({
      topic: blogTopic,
      category: blogCategory
    }, {
      onSuccess: () => {
        toast({
          title: "Post gerado!",
          description: "O post do blog foi gerado com sucesso usando IA.",
        });
        setBlogTopic('');
        setBlogCategory('');
      },
      onError: () => {
        toast({
          title: "Erro",
          description: "Erro ao gerar post do blog.",
          variant: "destructive"
        });
      }
    });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Painel Administrativo</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Adicionar Novo Serviço */}
        <Card>
          <CardHeader>
            <CardTitle>Adicionar Novo Serviço</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Nome do serviço"
              value={newService.name}
              onChange={(e) => setNewService(prev => ({ ...prev, name: e.target.value }))}
            />
            
            <Input
              placeholder="Slug (URL amigável)"
              value={newService.slug}
              onChange={(e) => setNewService(prev => ({ ...prev, slug: e.target.value }))}
            />
            
            <Textarea
              placeholder="Descrição do serviço"
              value={newService.description}
              onChange={(e) => setNewService(prev => ({ ...prev, description: e.target.value }))}
            />
            
            <Input
              placeholder="Preço base"
              type="number"
              value={newService.base_price}
              onChange={(e) => setNewService(prev => ({ ...prev, base_price: Number(e.target.value) }))}
            />
            
            <Input
              placeholder="Categoria"
              value={newService.category}
              onChange={(e) => setNewService(prev => ({ ...prev, category: e.target.value }))}
            />
            
            <div className="space-y-2">
              <div className="flex gap-2">
                <Input
                  placeholder="Adicionar característica"
                  value={newFeature}
                  onChange={(e) => setNewFeature(e.target.value)}
                />
                <Button onClick={handleAddFeature}>Adicionar</Button>
              </div>
              
              <div className="space-y-1">
                {newService.features.map((feature, index) => (
                  <div key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
                    <span>{feature}</span>
                    <Button
                      variant="destructive"
                      size="sm"
                      onClick={() => handleRemoveFeature(index)}
                    >
                      Remover
                    </Button>
                  </div>
                ))}
              </div>
            </div>
            
            <Button onClick={handleAddService} className="w-full">
              Criar Serviço e Gerar Páginas
            </Button>
          </CardContent>
        </Card>

        {/* Gerar Post do Blog */}
        <Card>
          <CardHeader>
            <CardTitle>Gerar Post do Blog com IA</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input
              placeholder="Tópico do post"
              value={blogTopic}
              onChange={(e) => setBlogTopic(e.target.value)}
            />
            
            <Input
              placeholder="Categoria"
              value={blogCategory}
              onChange={(e) => setBlogCategory(e.target.value)}
            />
            
            <Button 
              onClick={handleGenerateBlogPost}
              disabled={generateBlogPost.isPending}
              className="w-full"
            >
              {generateBlogPost.isPending ? 'Gerando...' : 'Gerar Post com IA'}
            </Button>
          </CardContent>
        </Card>

        {/* Lista de Serviços */}
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Serviços Cadastrados</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {services?.map((service: any) => (
                <div key={service.id} className="border p-4 rounded-lg">
                  <h3 className="font-semibold">{service.name}</h3>
                  <p className="text-sm text-gray-600">{service.category}</p>
                  <p className="text-sm">R$ {service.base_price?.toLocaleString('pt-BR')}</p>
                  <p className="text-xs text-gray-500">Slug: {service.slug}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;
