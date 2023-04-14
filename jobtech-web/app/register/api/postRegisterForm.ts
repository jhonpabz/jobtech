import axiosClient from '@/app/api/axiosClient';

export const postRegisterForm = async (url: string) => {
  try {
    const {
      data: { data },
    } = await axiosClient.post(url, {
      baseURL: '',
    });
  } catch (error) {
    console.log(error);
    throw error;
  }
};
