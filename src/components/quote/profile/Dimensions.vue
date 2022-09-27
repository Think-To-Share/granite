<template>
    <div class="row form-group mmcalculator">
        <div class="col-lg-1 piece-box">
            <label class="mesaure-box__label" for="">Piece<br>
                <span>A</span> 
            </label>
        </div>
        <div class="col-lg-5 mesaure-box__input">
            <div class="input-box"> 
                <input placeholder="2500mm" type="text" name="length" class="form-control numberonly" value=""> 
            </div>
        </div>
        <div class="col-lg-1 piece-box">
            <span>x</span>
        </div>
        <div class="col-lg-5 mesaure-box__input">
            <div class="input-box"> 
                <input placeholder="600mm" type="text" name="length" class="form-control numberonly" value=""> 
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

.measurements-card{
        box-shadow : 0px 1px 5px 1px rgb(209 207 207 / 85%);
        border-bottom : 3px solid rgb(209 207 207 / 85%);
        border-radius : 0%;
        border : none;
        margin : 10;

        .mmcalculator{
            .piece-box{
                align-items: center;
                display: grid;
                span{
                    text-align: center;
                    @include font-size(1.9rem);
                    font-weight: 400;
                }
            }
            .mesaure-box__label{
                display: block;
                text-align: center;
                font-family: var(--primary-font);
                @include font-size(1rem);
                font-weight: 600;
               span{
                    display: block;
                    text-align: center;
                    font-weight: 600;
                    font-family: var(--primary-font);
                    @include font-size(1.5rem)

               } 
            }
            .mesaure-box__input{
                .input-box{
                    input{
                        padding: 1em 0.5em;
                    }
                }
            }
        }
        .length-width-part{
            text-align: center;
            font-family: var(--primary-font);
            color:#3C7C8E;
            font-weight: 600;
            @include font-size(1.2rem);
        }
    }
</style>