import { ApiConstant } from 'src/common/consts';
import baseService from '../base';
import { buildHomeParams, mapToHomeData } from './utils';

export default {
    getHomeApi: async ({ params }) => {
        const url = ApiConstant.Urls.home;
        const res = await baseService.getInstance().get(url, {
            params: buildHomeParams(params),
        });

        return res.error
            ? res
            : {
                  ...res,
                  data: mapToHomeData(res.data),
              };
    },
};
