<template>
  <div class="contact">
    <h3>联系我们</h3>
    <div class="main">
      <div>
        <div>
          <img src="https://dcdn.it120.cc/2021/06/13/ae25265a-a29d-49a7-85ca-785be4dd5497.jpg" alt="">
        </div>
        <div>微信</div>
      </div>
      <div>
        <div>
          <img src="https://dcdn.it120.cc/2021/06/13/d4544e98-6fe3-49d6-83af-5d42489ee05e.jpg" alt="">
        </div>
        <div>QQ</div>
      </div>
      <div>
        <div>
          <img src="https://dcdn.it120.cc/2021/06/13/57e923ee-5422-4877-a2b2-2ae677aca1b6.jpg" alt="">
        </div>
        <div>微博</div>
      </div>
      <div>
        <div>
          <img src="https://dcdn.it120.cc/2021/06/13/37242f02-2cce-41a9-bea2-bbd0f35b9e80.jpg" alt="">
        </div>
        <div>抖音</div>
      </div>
      <div>
        <div>
          <img src="https://dcdn.it120.cc/2021/06/13/830942f1-6424-4fe1-be41-3ee8b6dde556.jpg" alt="">
        </div>
        <div>快手</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: "Contact"
}
</script>

<style scoped>
.contact{
  width: 1270px;
  margin: 0 auto;
  padding: 30px 0;
  border-bottom: .4px solid #4c4c4c;
}
.main{
  display: flex;

}
.main>div{
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.main>div>div{
  display: flex;
  justify-content: center;
  margin-bottom: 10px;
  color: white;
  font-size: 14px;
}
.main>div img{
  width: 45%;
}
h3{
  color: white;
  margin-bottom: 20px;
  padding-left: 62px;
}
</style>