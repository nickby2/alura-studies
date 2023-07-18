import { useState } from "react";
import { tempoParaSegundos } from "../../common/utils/time";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './style.module.scss';

interface Props{
    selecionado: ITarefa | undefined
}

export default function Cronometro({selecionado} : Props){
    const[tempo, setTempo] = useState<number>();
    if(selecionado?.tempo){
        setTempo(tempoParaSegundos(selecionado.tempo));
    }
    return(
        <div className={style.cronometro}>
        <p className={style.titulo}>Escolha um card e inicie o cronômetro</p>
        Tempo: {tempo}
        <div className={style.relogioWrapper}>
            <Relogio />
        </div>
        <Botao
            texto='Começar!'
        />

        </div>

    )
}