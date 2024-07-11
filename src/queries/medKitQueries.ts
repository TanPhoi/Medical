import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
import {getMedKitApi, insertMedKitApi} from '../api/medKitApi';

type MedKit = {
  field: string;
  doctor: string;
  appointmentType: string;
  date: string;
  time: string;
  image: string;
};

export const useGetMedKitMutation = () => {
  return useQuery({
    queryKey: ['medKits'],
    queryFn: getMedKitApi,
  });
};

export const useInsertMedKitMutation = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({field, doctor, appointmentType, date, time, image}: MedKit) =>
      insertMedKitApi({field, doctor, appointmentType, date, time, image}),
    onSuccess: () => {
      queryClient.invalidateQueries({queryKey: ['medKits']});
    },
  });
};
