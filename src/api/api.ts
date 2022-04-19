import axios from 'axios';

export const getWidgets = async (link : string, setWidgets : any) => (
  axios.get<string[]>(link)
    .then((res) => {
      setWidgets(res.data);
    })
    .catch((err) => console.log(err))
);
