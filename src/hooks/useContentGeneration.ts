
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const useGenerateContent = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ cityId, serviceId, cityName, serviceName, stateName }: {
      cityId: number;
      serviceId: number;
      cityName: string;
      serviceName: string;
      stateName: string;
    }) => {
      const { data, error } = await supabase.functions.invoke('generate-content', {
        body: { cityId, serviceId, cityName, serviceName, stateName }
      });
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['generated-content'] });
    }
  });
};

export const useGenerateBlogPost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async ({ topic, category }: { topic?: string; category?: string }) => {
      const { data, error } = await supabase.functions.invoke('generate-blog-post', {
        body: { topic, category }
      });
      
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['blog-posts'] });
    }
  });
};

export const useCities = () => {
  return useQuery({
    queryKey: ['cities'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cities')
        .select(`
          *,
          states(name, code)
        `)
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useServices = () => {
  return useQuery({
    queryKey: ['services'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('services')
        .select('*')
        .eq('active', true)
        .order('name');
      
      if (error) throw error;
      return data;
    }
  });
};

export const useGeneratedContent = (cityId?: number, serviceId?: number) => {
  return useQuery({
    queryKey: ['generated-content', cityId, serviceId],
    queryFn: async () => {
      let query = supabase.from('generated_content').select('*');
      
      if (cityId) query = query.eq('city_id', cityId);
      if (serviceId) query = query.eq('service_id', serviceId);
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    },
    enabled: !!cityId || !!serviceId
  });
};
