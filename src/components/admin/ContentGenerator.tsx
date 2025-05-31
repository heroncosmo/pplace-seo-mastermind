
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useGenerateContent, useCities, useServices } from '@/hooks/useContentGeneration';

const ContentGenerator = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const { toast } = useToast();
  
  const { data: cities } = useCities();
  const { data: services } = useServices();
  const generateContent = useGenerateContent();

  const handleGenerate = async () => {
    if (!selectedCity || !selectedService) {
      toast({
        title: "Erro",
        description: "Por favor, selecione uma cidade e um serviço.",
        variant: "destructive",
      });
      return;
    }

    const city = cities?.find(c => c.id === parseInt(selectedCity));
    const service = services?.find(s => s.id === parseInt(selectedService));

    if (!city || !service) {
      toast({
        title: "Erro",
        description: "Cidade ou serviço não encontrado.",
        variant: "destructive",
      });
      return;
    }

    try {
      await generateContent.mutateAsync({
        cityId: city.id,
        serviceId: service.id,
        cityName: city.name,
        serviceName: service.name,
        stateName: city.states?.name || ''
      });
      
      toast({
        title: "Conteúdo gerado com sucesso!",
        description: `Página ${service.name} em ${city.name} foi criada.`,
      });

      setSelectedCity('');
      setSelectedService('');
    } catch (error) {
      console.error('Error generating content:', error);
      toast({
        title: "Erro ao gerar conteúdo",
        description: "Ocorreu um erro ao tentar gerar o conteúdo.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerar Conteúdo Dinâmico</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <label>Cidade</label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma cidade" />
              </SelectTrigger>
              <SelectContent>
                {cities?.map((city) => (
                  <SelectItem key={city.id} value={city.id.toString()}>
                    {city.name} - {city.states?.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label>Serviço</label>
            <Select value={selectedService} onValueChange={setSelectedService}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione um serviço" />
              </SelectTrigger>
              <SelectContent>
                {services?.map((service) => (
                  <SelectItem key={service.id} value={service.id.toString()}>
                    {service.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={handleGenerate} 
            disabled={generateContent.isPending} 
            className="w-full"
          >
            {generateContent.isPending ? 'Gerando...' : 'Gerar Conteúdo com IA'}
          </Button>
        </div>

        {generateContent.isPending && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700">🤖 A IA está criando o conteúdo... Isso pode levar alguns segundos.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default ContentGenerator;
