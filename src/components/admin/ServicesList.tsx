
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useServices } from '@/hooks/useContentGeneration';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useQueryClient } from '@tanstack/react-query';

const ServicesList = () => {
  const { data: services, isLoading } = useServices();
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const handleToggleService = async (serviceId: number, currentStatus: boolean) => {
    try {
      const { error } = await supabase
        .from('services')
        .update({ active: !currentStatus })
        .eq('id', serviceId);

      if (error) throw error;

      queryClient.invalidateQueries({ queryKey: ['services'] });
      
      toast({
        title: "Serviço atualizado!",
        description: `Serviço ${!currentStatus ? 'ativado' : 'desativado'} com sucesso.`,
      });
    } catch (error) {
      console.error('Error toggling service:', error);
      toast({
        title: "Erro",
        description: "Não foi possível atualizar o serviço.",
        variant: "destructive",
      });
    }
  };

  if (isLoading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Lista de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <p>Carregando serviços...</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Lista de Serviços</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {services?.map((service) => (
            <div key={service.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div>
                <h4 className="font-semibold">{service.name}</h4>
                <p className="text-sm text-gray-600">{service.description}</p>
                <p className="text-sm font-medium text-purple-600">
                  R$ {service.base_price?.toLocaleString('pt-BR')}
                </p>
              </div>
              <Button
                onClick={() => handleToggleService(service.id, service.active)}
                variant={service.active ? "default" : "outline"}
                size="sm"
              >
                {service.active ? 'Ativo' : 'Inativo'}
              </Button>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ServicesList;
