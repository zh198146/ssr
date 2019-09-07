<template>
  <el-form
  :model='form'
  ref="form"
  :rules="rules"
  class="form">
    <el-form-item class="form-item" prop="username">
        <el-input
            v-model="form.username"
            placeholder="用户名手机">
        </el-input>
    </el-form-item>
    <el-form-item>
        <el-input
        v-model="form.captcha"
         placeholder="验证码" >
            <template slot="append">
                <el-button @click="handleSendCaptcha">  
                    发送验证码
                </el-button>
            </template>
        </el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="nickname">
        <el-input
        v-model="form.nickname"
        placeholder="你的名字">
        </el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="password">
        <el-input
        v-model="form.nickname"
        placeholder="密码"
        type="password">
        </el-input>
    </el-form-item>
    <el-form-item class="form-item" prop="checkPassword">
        <el-input
        v-model="form.nickname"
        placeholder="确认密码">
        </el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .form{	    
        padding:25px;	        
    }	    
    .form-item{	    
        margin-bottom:20px;	       
    }	    
    .form-text{	    
        font-size:12px;	       
        color:#409EFF;	       
        text-align: right;	   
        line-height: 1;	       
    }	    
    .submit{	   
        width:100%;	        
        margin-top:10px;	
    }	    
</style>	