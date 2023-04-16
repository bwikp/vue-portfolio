<template>
    <div class="skillcode">
        <div class="blockEnd">
            <div class="divImg" >
                <button class="btnTitle">FRONT END</BUtton>
            </div>
            <div class=" listSkill">HTML/CSS</div>
            <div class=" listSkill">JAVASCRIPT</div>
            <div class=" listSkill">VueJS</div>

        </div>
        <div class="blockEnd">
            <div class="divImg" >
                <button class="btnTitle">BACK-END</button>
            </div>
            <div class=" listSkill">PHP</div>
            <div class=" listSkill">MariaDB</div>
            <div class=" listSkill">Symfony</div>
        </div>
    </div>
        <div class="Otskill">
                <button class="btnTitle">Logiciel</button>
            <div>
                <div class="listSkill">Photoshop</div>
                <div class="listSkill">Docker</div>
                <div class="listSkill">WordPress</div>
                <div class="listSkill">Xampp</div>
                <div class="listSkill">Github</div>
            </div>
            </div>
</template>
<style>

    .Otskill{
        display:  flex;
        flex-direction: column;
        justify-content: start;
        align-items: center;
        height: 40%;
        width: 100%;
    }
    .listSkill{
        height: 60%;
        width: 80%;
        font-size: 24px;
        margin-top: 15px;
        font-weight: 900;
        text-align: center;
    }
    .btnTitle{
        width: 100%;
        height: 50px;
    }
    .skillcode{
        display:  flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 50px;
        height: 70%;
        width: 100%;        
    }
    .divImg{
        height: 35%;
        width: 100%;
        margin-top: 25px;
    }
    .fe{
        position: absolute;
        font-size: 32px;
    }
    .blockEnd{
        display:  flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 50%;
        width: 45%;
        border-radius: 20px;
        box-shadow: rgb(38, 57, 77) 0px 2px 13px 5px;
    }
</style>