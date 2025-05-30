
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Carlos Silva",
      company: "E-commerce Fashion SP",
      text: "A PPlace criou nosso e-commerce e implementou o LeadPilot. Resultado: 300% de aumento nas vendas em 6 meses!",
      city: "São Paulo, SP"
    },
    {
      name: "Maria Santos",
      company: "Consultoria Digital",
      text: "O site institucional ficou perfeito e já estamos no top 3 do Google para nossas palavras-chave. Recomendo!",
      city: "Rio de Janeiro, RJ"
    },
    {
      name: "João Oliveira",
      company: "Tech Startup",
      text: "O aplicativo desenvolvido pela PPlace superou todas nossas expectativas. Equipe extremamente técnica!",
      city: "Belo Horizonte, MG"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            O que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-gray-600">
            Resultados reais de empresas em todo o Brasil
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border-2 border-gray-100 hover:border-purple-200 transition-colors">
              <CardContent className="p-6">
                <div className="mb-4">
                  <div className="flex text-yellow-400 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-600 italic">"{testimonial.text}"</p>
                </div>
                <div className="border-t pt-4">
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.company}</p>
                  <p className="text-sm text-purple-600">{testimonial.city}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
