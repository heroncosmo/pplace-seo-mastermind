
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useServices } from '@/hooks/useContentGeneration';
import { Loader2, Edit, Trash2 } from 'lucide-react';

const ServicesList = () => {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Lista de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-center p-8">
            <Loader2 className="h-8 w-8 animate-spin" />
            <span className="ml-2">Carregando serviços...</span>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>Lista de Serviços</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center p-8 text-red-500">
            Erro ao carregar serviços: {error.message}
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="lg:col-span-2">
      <CardHeader>
        <CardTitle>Lista de Serviços ({services?.length || 0})</CardTitle>
      </CardHeader>
      <CardContent>
        {!services || services.length === 0 ? (
          <div className="text-center p-8 text-gray-500">
            Nenhum serviço cadastrado ainda.
          </div>
        ) : (
          <div className="space-y-4">
            {services.map((service) => (
              <div
                key={service.id}
                className="border rounded-lg p-4 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-lg">{service.name}</h3>
                      <Badge variant={service.active ? "default" : "secondary"}>
                        {service.active ? "Ativo" : "Inativo"}
                      </Badge>
                      {service.category && (
                        <Badge variant="outline">{service.category}</Badge>
                      )}
                    </div>
                    
                    <p className="text-gray-600 mb-2">
                      Slug: <code className="bg-gray-100 px-1 rounded">/{service.slug}</code>
                    </p>
                    
                    {service.description && (
                      <p className="text-gray-700 mb-2">{service.description}</p>
                    )}
                    
                    {service.base_price && (
                      <p className="text-green-600 font-semibold">
                        Preço base: R$ {service.base_price.toLocaleString('pt-BR')}
                      </p>
                    )}
                  </div>
                  
                  <div className="flex gap-2 ml-4">
                    <Button variant="outline" size="sm">
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ServicesList;
