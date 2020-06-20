<template>
  <div class="my-footer">
    <div class="lianxi">
      <div class="col">
        <i class="el-icon-map-location"></i>
        <p>北京市朝阳区垡头翠成馨园141楼1102室</p>
      </div>
      <div class="col">
        <i class="el-icon-phone-outline"></i>
        <p>18600606507</p>
      </div>
      <div class="col">
        <i class="el-icon-timer"></i>
        <p>9:00-18:00</p>
      </div>
    </div>
    <p class="banquan">本站所有文章内容均来源于互联网，版权归原作者所有，所有文章内容观点与本站立场无关，如不慎侵犯了您的权益，请联系我们，我们将在第一时间处理！</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.my-footer {
  width: 1190px;
  margin: 0 auto;
  .lianxi {
    padding: 30px 50px 20px 50px;
    display: flex;
    .col {
      flex: 1;
      text-align: center;
      i {
        margin-right: 10px;
        &::before {
          color: #9e9e9e;
        }
      }
      p {
        color: #9e9e9e;
        display: inline;
      }
    }
  }
  .banquan{
    padding: 20px 0 10px 0;
    border-top: 1px solid #3F3F3F;
    text-align: center;
    font-size: 12px;
    color: #9e9e9e;
  }
}
</style>