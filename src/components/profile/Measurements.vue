<template>
    <div class="card text-start measurements-card mb-5">
      <div class="card-body">
        <h4 class="card-title granite-card-header mb-5">Do you know your Project Sizes?</h4>
        <div class="round-container">
            <button class="granite-round-btn">YES</button>
            <button class="granite-round-btn">NO</button>
        </div>
      </div>
    </div>
</template>

<script>
export default {
    
}
</script>
    
<style lang="scss" scoped>
    .measurements-card{
        box-shadow: 0px 1px 5px 1px rgb(209 207 207 / 85%);
        border-radius: 0%;
        border: none;
        margin: 10;
        .granite-card-header{
            font-family: var(--primary-font);
            color:#3C7C8E;
        }
        
        .granite-card-top-img
        {
            border-radius: none !important;
        }
        .granite-sub-card-header{
            background-color: #fff;
            border-bottom: none;
            color: #3C7C8E;
        }

        .round-container{
            .granite-round-btn{
                background-color: #3C7C8E;
                border : 3px solid #244a55;
                color : #fff;
                font-family:var(--primary-font);
                padding : 2%;
            }
        }

    }

</style>
