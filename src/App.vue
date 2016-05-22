<template>
  <app-base>
    <div class='flex'>
      <!--head-->
      <header>
        欢迎使用奥枫OA系统！
      </header>
      <!--main-->
      <article class='span'>
        <dynamic :comp="{name: 'functions'}"></dynamic>
      </article>
      <!--foot-->
      <footer>
        版本号：V0.0.2
      </footer>
    </div>
  </app-base>
</template>

<script>
export default {
}
</script>
