import React, { useState, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, MessagePlugin, Input, Checkbox, Button, FormInstanceFunctions, SubmitContext } from 'tdesign-react';
import { LockOnIcon, UserIcon, BrowseOffIcon, BrowseIcon, RefreshIcon } from 'tdesign-icons-react';
import classnames from 'classnames';
import QRCode from 'qrcode.react';
import { useAppDispatch } from 'modules/store';
import { login } from 'modules/user';
import useCountdown from '../../hooks/useCountDown';

import Style from './index.module.less';

const { FormItem } = Form;

export type ELoginType = 'phone' | 'verifyCode' | 'qrcode';

export default function Login() {
  const [loginType, changeLoginType] = useState<ELoginType>('phone');
  const { countdown, setupCountdown } = useCountdown(60);
  const formRef = useRef<FormInstanceFunctions>();
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit = async (e: SubmitContext) => {
    if (e.validateResult === true) {
      try {
        const formValue = (formRef.current?.getFieldsValue?.(true) || {}) as API.LogInDto;
       const res:any =  await dispatch(login(formValue));
       console.log("res",res)
       if(res.error){
        throw(res.error.message)
       }
        MessagePlugin.success('登录成功');
        navigate('/');
      } catch (e) {
        console.log(e);
        MessagePlugin.error('登录失败');
      }
    }
  };

  const switchType = (val: ELoginType) => {
    formRef.current?.reset?.();
    changeLoginType(val);
  };

  return (
    <div>
      <Form
        ref={formRef}
        className={classnames(Style.itemContainer, `login-${loginType}`)}
        labelWidth={0}
        onSubmit={onSubmit}
        
      >
        {loginType === 'phone' && (
          <>
            <FormItem initialData={'13996092317'} name='phoneNumber' rules={[{ required: true, message: '账号必填', type: 'error' }]}>
              <Input clearable size='large' placeholder='请输入11位手机号' prefixIcon={<UserIcon />}></Input>
            </FormItem>
          </>
        )}

        {/* 扫码登陆 */}
        {loginType === 'qrcode' && (
          <>
            <div className={Style.tipContainer}>
              <span className='tip'>请使用微信扫一扫登录</span>
              <span className='refresh'>
                刷新 <RefreshIcon />
              </span>
            </div>
            <QRCode value='' size={200} />
          </>
        )}
        {/* 验证码登陆 */}
        {loginType === 'verifyCode' && (
          <>
            <FormItem name='phoneNumber' rules={[{ required: true, message: '手机号必填', type: 'error' }]}>
              <Input maxlength={11} size='large' placeholder='请输入您的手机号' prefixIcon={<UserIcon />} />
            </FormItem>
            <FormItem name='verifyCode' rules={[{ required: true, message: '验证码必填', type: 'error' }]}>
              <Input size='large' placeholder='请输入验证码' />
              <Button
                variant='outline'
                className={Style.verificationBtn}
                disabled={countdown > 0}
                onClick={setupCountdown}
              >
                {countdown === 0 ? '发送验证码' : `${countdown}秒后可重发`}
              </Button>
            </FormItem>
          </>
        )}
        {loginType !== 'qrcode' && (
          <FormItem className={Style.btnContainer}>
            <Button block size='large' type='submit'>
              登录
            </Button>
          </FormItem>
        )}
        <div className={Style.switchContainer}>
          {loginType !== 'phone' && (
            <span className='tip' onClick={() => switchType('phone')}>
              使用手机号一键登录
            </span>
          )}
          {/* {loginType !== 'qrcode' && (
            <span className='tip' onClick={() => switchType('qrcode')}>
              使用微信扫码登录
            </span>
          )}*/}
          {loginType !== 'verifyCode' && (
            <span className='tip' onClick={() => switchType('verifyCode')}>
              使用验证码登录
            </span>
          )} 
        </div>
      </Form>
    </div>
  );
}
