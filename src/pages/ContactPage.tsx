
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
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
    message: ''
  });

  const whatsappUrl = "https://api.whatsapp.com/send?phone=5517981679818&text=Oi%2C%20tudo%20bem%3F%20Gostaria%20de%20entrar%20em%20contato%20com%20a%20PPlace.";

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const whatsappMessage = `Oi, tudo bem? Meu nome é ${formData.name}, da empresa ${formData.company}. Gostaria de informações sobre ${formData.service}. Meu contato: ${formData.phone} / ${formData.email}. Mensagem: ${formData.message}`;
    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappWithForm = `https://api.whatsapp.com/send?phone=5517981679818&text=${encodedMessage}`;
    
    window.open(whatsappWithForm, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <SEO 
        title="Contato PPlace - Fale Conosco (17) 98167-9818"
        description="Entre em contato com a PPlace. WhatsApp: (17) 98167-9818 | Email: contato@lojapplace.com. Atendimento especializado em tecnologia e IA."
        keywords="contato pplace, whatsapp pplace, telefone pplace, orcamento tecnologia"
        canonical="https://pplace.com.br/contato"
      />
      
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fale Conosco
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Estamos prontos para transformar seu negócio. Entre em contato e receba um orçamento personalizado.
          </p>
        </div>
      </section>

      <div className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            
            {/* Informações de Contato */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Entre em Contato
              </h2>
              
              <div className="space-y-6 mb-8">
                <Card className="border-2 border-green-200 bg-green-50">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                        <Phone className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">WhatsApp Preferencial</h3>
                        <p className="text-gray-600">(17) 98167-9818</p>
                        <Button 
                          className="mt-2 bg-green-600 hover:bg-green-700"
                          onClick={() => window.open(whatsappUrl, '_blank')}
                        >
                          Chamar no WhatsApp
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center">
                        <Mail className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">E-mail</h3>
                        <p className="text-gray-600">contato@lojapplace.com</p>
                        <Button 
                          variant="outline" 
                          className="mt-2"
                          onClick={() => window.location.href = 'mailto:contato@lojapplace.com'}
                        >
                          Enviar E-mail
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                        <Clock className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Horário de Atendimento</h3>
                        <p className="text-gray-600">Segunda a Sexta: 8h às 18h</p>
                        <p className="text-gray-600">Sábado: 8h às 12h</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-indigo-500 rounded-full flex items-center justify-center">
                        <MapPin className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900">Localização</h3>
                        <p className="text-gray-600">Atendemos todo o Brasil</p>
                        <p className="text-gray-600">Sede em São José do Rio Preto - SP</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Formulário de Contato */}
            <div>
              <Card>
                <CardHeader className="bg-gradient-to-r from-purple-600 to-blue-600 text-white">
                  <CardTitle className="text-2xl">
                    Solicite seu Orçamento
                  </CardTitle>
                  <p>Preencha o formulário e enviaremos via WhatsApp</p>
                </CardHeader>
                <CardContent className="pt-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Nome Completo *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Seu nome completo"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-mail *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="seu@email.com"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        WhatsApp *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="(11) 99999-9999"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Empresa
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Nome da sua empresa"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Serviço de Interesse *
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        required
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                      >
                        <option value="">Selecione um serviço</option>
                        <option value="E-commerce">E-commerce</option>
                        <option value="Landing Page">Landing Page</option>
                        <option value="LeadPilot">LeadPilot</option>
                        <option value="Site Institucional">Site Institucional</option>
                        <option value="Aplicativo">Aplicativo Mobile</option>
                        <option value="Sistema com IA">Sistema com IA</option>
                        <option value="SEO">SEO</option>
                        <option value="Marketing Digital">Marketing Digital</option>
                        <option value="Outro">Outro</option>
                      </select>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Mensagem
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        placeholder="Conte-nos sobre seu projeto..."
                      />
                    </div>
                    
                    <Button 
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-3"
                    >
                      Enviar via WhatsApp
                    </Button>
                    
                    <p className="text-xs text-gray-500 text-center">
                      ✅ Resposta garantida em até 2 horas • ✅ Atendimento personalizado
                    </p>
                  </form>
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
