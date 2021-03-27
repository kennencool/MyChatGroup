<template>
  <div>
    <div>
      <div>
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
          <el-menu-item index="1">处理中心</el-menu-item>
          <el-submenu index="2">
            <template #title>我的工作台</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template #title>选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3" >消息中心</el-menu-item>
          <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">订单管理</a></el-menu-item>
        </el-menu>
      </div>

      <div>
        <div>
          <el-form ref="form" :model="form" label-width="0px">
            <el-form-item>
              <el-tag class="tag" >活动性质</el-tag>
              <el-radio-group v-model="form.type">
                <el-radio label="1" name="type">备选项</el-radio>
                <el-radio label="2" name="type">备选项</el-radio>
                <el-radio label="3" name="type">备选项</el-radio>
                <el-radio label="4" name="type">备选项</el-radio>
                <el-radio label="5" name="type">备选项</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-tag class="tag" >时间</el-tag>
              <el-radio-group v-model="form.times">
                <el-radio label=  "1" name="times">最近一天</el-radio>
                <el-radio label="2" name="times">最近三天</el-radio>
                <el-radio label="3" name="times">最近一周</el-radio>
                <el-radio label="4" name="times">最近一个月</el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="onSubmit" size="mini">立即创建</el-button>
              <el-button size="mini" >取消</el-button>
            </el-form-item>
          </el-form>
        </div>
        <div>
          <el-carousel :interval="4000" type="card" height="200px" :autoplay="false" @click="goChat">
            <el-carousel-item v-for="item in 6" :key="item"  >
              <div class="carousel-item">
                <div>
                  
                </div>
                
                <div>
                  <h3>
                    <el-button type="success" @click.native="goChat" icon="el-icon-check" circle>进入{{item}}号屋</el-button>
                  </h3>
                </div>
                
                <div class="card-icon">
                  <div>
                    <i class="el-icon-s-opportunity"
                       style="color: yellow; margin-right: 5px;"></i>
                    <label style="color: yellow; margin-right: 5px">{{item}}0万</label>
                  </div>
                  <div>
                    <i class="el-icon-s-custom"
                       style="color: blue; margin-right: 5px;"></i>
                    <label style="color: blue; margin-right: 5px">{{item}}000</label>
                  </div>
                </div>
               </div>
            </el-carousel-item>
          </el-carousel>
        </div>
      </div>
    </div>
    
    
    
    
  </div>
</template>

<script>

export default {
  name: 'Home',
  data() {
    return {
      activeIndex: '1',
      form: {
        type: [],
        times: [],
        
      }
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    onSubmit() {
      console.log('submit!');
    },
    goChat(){
      this.$router.push('/chat');
    },
    
    
    
  },
}
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.tag{
  margin-right: 40px;
  width: 100px;
}

.carousel-item {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}

.card-icon {
  flex-direction: column;
  display: flex;
  justify-content: start;
}

</style>