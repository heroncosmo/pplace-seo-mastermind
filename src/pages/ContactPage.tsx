
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import SEO from '@/components/SEO';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: '',
    budget: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui seria implementada a lógica de envio
    console.log('Formulário enviado:', formData);
    alert('Mensagem enviada com sucesso! Entraremos em contato em até 2 horas.');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const services = [
    'Site Institucional',
    'E-commerce',
    'Landing Page',
    'LeadPilot System',
    'Aplicativo Mobile',
    'Sistema com IA',
    'SEO e Marketing Digital',
    'Outros'
  ];

  const budgetRanges = [
    'Até R$ 5.000',
    'R$ 5.000 - R$ 15.000',
    'R$ 15.000 - R$ 50.000',
    'R$ 50.000 - R$ 100.000',
    'Acima de R$ 100.000'
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Contato PPlace - Solicite seu Orçamento Gratuito"
        description="Entre em contato com a PPlace e receba uma proposta personalizada. Atendimento 24/7, orçamento grátis e especialistas prontos para ajudar seu negócio."
        keywords="contato pplace, orçamento site, desenvolvimento web, leadpilot, whatsapp pplace"
        canonical="https://pplace.com.br/contato"
        schema={{
          "@context": "https://schema.org",
          "@type": "ContactPage",
          "mainEntity": {
            "@type": "Organization",
            "name": "PPlace",
            "telephone": "+55-11-99999-9999",
            "email": "contato@pplace.com.br"
          }
        }}
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Transforme seu negócio hoje mesmo. Nossa equipe está pronta para criar 
            a solução perfeita para sua empresa.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700">
              WhatsApp: (11) 99999-9999
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-purple-600">
              contato@pplace.com.br
            </Button>
          </div>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Formulário de Contato */}
            <Card className="hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-purple-600">Solicite seu Orçamento Gratuito</CardTitle>
                <p className="text-gray-600">Preencha o formulário e receba uma proposta em até 2 horas</p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">Nome Completo *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Seu nome completo"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-mail *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="seu@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">WhatsApp *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Empresa</Label>
                      <Input
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="service">Serviço de Interesse</Label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Selecione um serviço</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Orçamento Disponível</Label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full h-10 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      >
                        <option value="">Selecione uma faixa</option>
                        {budgetRanges.map((range, index) => (
                          <option key={index} value={range}>{range}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensagem</Label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                      placeholder="Conte-nos mais sobre seu projeto..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-purple-600 hover:bg-purple-700">
                    Solicitar Orçamento Gratuito
                  </Button>
                  
                  <p className="text-sm text-gray-500 text-center">
                    Resposta garantida em até 2 horas • Orçamento sem compromisso
                  </p>
                </form>
              </CardContent>
            </Card>

            {/* Informações de Contato e Vantagens */}
            <div className="space-y-8">
              
              {/* Contatos Diretos */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Contatos Diretos</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📱</span>
                    </div>
                    <div>
                      <p className="font-semibold">WhatsApp</p>
                      <p className="text-gray-600">(11) 99999-9999</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">📧</span>
                    </div>
                    <div>
                      <p className="font-semibold">E-mail</p>
                      <p className="text-gray-600">contato@pplace.com.br</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-sm">🌐</span>
                    </div>
                    <div>
                      <p className="font-semibold">Atendimento</p>
                      <p className="text-gray-600">Todo o Brasil • 24/7</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Por que escolher a PPlace */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Por que escolher a PPlace?</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Resposta Rápida</p>
                      <p className="text-gray-600 text-sm">Respondemos todos os orçamentos em até 2 horas</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Especialistas Certificados</p>
                      <p className="text-gray-600 text-sm">Equipe com mais de 10 anos de experiência</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Garantia de Resultados</p>
                      <p className="text-gray-600 text-sm">99% de satisfação dos clientes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mt-1">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <div>
                      <p className="font-semibold">Tecnologia Avançada</p>
                      <p className="text-gray-600 text-sm">IA, automação e as mais modernas ferramentas</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Horários de Atendimento */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-600">Horários de Atendimento</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <div className="flex justify-between">
                      <span>Segunda a Sexta:</span>
                      <span className="font-semibold">8h às 18h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sábados:</span>
                      <span className="font-semibold">9h às 14h</span>
                    </div>
                    <div className="flex justify-between">
                      <span>WhatsApp:</span>
                      <span className="font-semibold text-green-600">24/7</span>
                    </div>
                    <div className="flex justify-between">
                      <span>E-mail:</span>
                      <span className="font-semibold text-purple-600">24/7</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
