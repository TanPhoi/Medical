import medKitInstance from '../api/medKitInstance';

type MedKit = {
  field: string;
  doctor: string;
  appointmentType: string;
  date: string;
  time: string;
  image: string;
};

const url = 'medkits';
export const getMedKitApi = () => {
  return medKitInstance
    .get(url)
    .then(res => res.data)
    .catch(err => {
      console.log(err);
    });
};

export const insertMedKitApi = ({
  field,
  doctor,
  appointmentType,
  date,
  time,
  image,
}: MedKit) => {
  return medKitInstance
    .post(url, {field, doctor, appointmentType, date, time, image})
    .then(res => res.data)
    .catch(err => console.log(err));
};
