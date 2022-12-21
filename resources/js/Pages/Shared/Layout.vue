<template>
<div class="min-h-screen">
    <div class=''> 
       <Nav />
    </div>
    
    <div class=' '>
      
        <main class='bg-gray-50  p-2'> 
            <div class="">
              <slot />
            </div>
        
        </main>
    
    </div>
    <Footer/>
</div>

</template>
<script >
import Nav from '../Shared/Nav';
import Footer from '../Shared/Footer';

export default {
  components: { Nav ,Footer },

};
</script>
