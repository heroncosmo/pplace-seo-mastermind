
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { useGenerateBlogPost } from '@/hooks/useContentGeneration';

const BlogGenerator = () => {
  const [topic, setTopic] = useState('');
  const [category, setCategory] = useState('');
  const { toast } = useToast();
  const generateBlogPost = useGenerateBlogPost();

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await generateBlogPost.mutateAsync({ topic, category });
      
      toast({
        title: "Post do blog gerado com sucesso!",
        description: "O novo artigo foi criado e salvo no banco de dados.",
      });

      setTopic('');
      setCategory('');
    } catch (error) {
      console.error('Error generating blog post:', error);
      toast({
        title: "Erro ao gerar post",
        description: "Ocorreu um erro ao tentar gerar o artigo do blog.",
        variant: "destructive",
      });
    }
  };

  const handleGenerateRandom = async () => {
    try {
      await generateBlogPost.mutateAsync({ topic: '', category: 'Tecnologia' });
      
      toast({
        title: "Post do blog gerado com sucesso!",
        description: "Um novo artigo aleatório foi criado.",
      });
    } catch (error) {
      console.error('Error generating blog post:', error);
      toast({
        title: "Erro ao gerar post",
        description: "Ocorreu um erro ao tentar gerar o artigo do blog.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Gerar Post do Blog com IA</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleGenerate} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="topic">Tópico do Artigo</Label>
            <Input
              id="topic"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              placeholder="Ex: Como criar um e-commerce que converte"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Categoria</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger>
                <SelectValue placeholder="Selecione uma categoria" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="tecnologia">Tecnologia</SelectItem>
                <SelectItem value="marketing-digital">Marketing Digital</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="ia">Inteligência Artificial</SelectItem>
                <SelectItem value="desenvolvimento">Desenvolvimento</SelectItem>
                <SelectItem value="seo">SEO</SelectItem>
                <SelectItem value="design">Design</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={generateBlogPost.isPending} 
              className="flex-1"
            >
              {generateBlogPost.isPending ? 'Gerando...' : 'Gerar Artigo'}
            </Button>
            <Button 
              type="button"
              onClick={handleGenerateRandom}
              disabled={generateBlogPost.isPending} 
              variant="outline"
              className="flex-1"
            >
              Artigo Aleatório
            </Button>
          </div>
        </form>

        {generateBlogPost.isPending && (
          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-700">🤖 A IA está criando seu artigo... Isso pode levar alguns segundos.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default BlogGenerator;
