<template>
    <div>
        <div class="selectedrange">
            <h4 class="selectedrange-heading">White Diamond Quartz</h4>
            <button class="price-btn">20mm Polished</button>
            <div class="imgBox border bg-white">
                <img src="@/assets/images/IceWhite.jpg" class="img-fluid">
            </div>
        </div>   
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
@import "rfs/scss";
.selectedrange{
    box-shadow: 0px 1px 5px 1px #d1cfcfd9;
    padding: 45px 35px;
    margin-bottom: 25px;
    .selectedrange-heading{
       color: #3c7c8e;
       font-family: var(--primary-font);
    }
    .price-btn{
        background-color:#3c7c8e;
        color: #fff;
        padding: 10px 15px;
        border: none;
        margin-bottom: 15px;
        margin-top: 15px;
    }
    .imgBox{
        img{
            width: 100%;
        }
    }
}
</style>