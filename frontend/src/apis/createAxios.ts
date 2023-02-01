import { ImportExport } from '@mui/icons-material';
import axios from 'axios';

const axiosCustom = axios.create({
  baseURL: 'http://conf.simpsonfilm.com',
});

export default axiosCustom;
