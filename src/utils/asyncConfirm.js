
import {MessageBox} from 'element-ui'

export const asyncConfirm = (objParams, cb) => {
  let {con, tit="提示", type='warning', loading=true} = objParams;
  MessageBox.confirm(con, tit, {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type,
    beforeClose: (action, instance, done) => {
      if (action === 'confirm') {
        loading && (instance.confirmButtonLoading = true);
        instance.confirmButtonText = '执行中...';
        cb(done, instance);
      } else {
        done();
      }
    }
  }).then(() => {
  }).catch(() => {       
  });
}