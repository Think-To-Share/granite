<template>
    <div class="card text-start measurements-card mb-5">
      <div class="card-body button-card">
        <h4 class="card-title granite-card-header mb-5">Do you know your Project Sizes?</h4>
        <div class="round-container">
            <button class="granite-round-btn-filled">YES</button>
            <button class="granite-round-btn-empty">NO</button>
        </div>
      </div>
      <div class="card-body button-card">
        <h4 class="card-title granite-card-header mb-5">Do you have a Project Plan?</h4>
        <div class="round-container">
            <button class="granite-round-btn-filled">YES</button>
            <button class="granite-round-btn-empty">NO</button>
        </div>
      </div>
      <div class="card-body button-card">
        <h4 class="card-title granite-card-header mb-5">How would you describe the Size of your Project?</h4>
        <div class="round-container">
            <button class="granite-square-btn-empty">S</button>
            <button class="granite-square-btn-empty">M</button>
            <button class="granite-square-btn-empty">L</button>
            <button class="granite-square-btn-empty">XL</button>
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
        box-shadow : 0px 1px 5px 1px rgb(209 207 207 / 85%);
        border-bottom : 3px solid rgb(209 207 207 / 85%);
        border-radius : 0%;
        border : none;
        margin : 10;

        .button-card{
            border-bottom : 2px solid rgba(250, 250, 250, 0.85);
            transition: all 0.5s ease 0s;

            &:hover{
                background-color : rgba(246, 246, 246, 0.85);
            }
        }
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

            .granite-round-btn-filled{
                background-color: #3C7C8E;
                border : 6px solid #244a55;
                color : #fff;
                font-family:var(--primary-font);
                padding : 2%;
                margin : 2%;
                border-radius : 60%;
                transition: all 0.5s ease 0s;
                
            }
            .granite-round-btn-empty{
                background-color: #fff;
                border : 6px solid #ddd;
                color : #888;
                font-family:var(--primary-font);
                padding : 2%;
                margin : 2%;
                border-radius : 60%;
                transition: all 0.5s ease 0s;
                
                &:hover{
                    background-color: #3C7C8E;
                    border : 6px solid #244a55;
                    color : #fff;
                }
            }

            .granite-square-btn-empty{
                background-color: #fff;
                border : 6px solid #ddd;
                color : #888;
                font-family:var(--primary-font);
                padding : 3%;
                margin : 2%;
                transition: all 0.5s ease 0s;
                
                &:hover{
                    background-color: #3C7C8E;
                    border : 6px solid #244a55;
                    color : #fff;
                }
            }
        }

    }

</style>
