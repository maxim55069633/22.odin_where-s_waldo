import TMNT from "../images/TMNT.png";

const GameMap=({checkAnswer})=>{
    return (
        <div  className="game-map">
            <img src={TMNT} alt="teenager mutant ninja turtles" useMap="#TMNT"/>
            <map name="TMNT">
                <area 
                shape="poly" coords="
                328,173,
                275,40,
                508,43,
                520,170,
                406,252,
                328,173
                "
                alt="mikey"
                onClick={checkAnswer}
                />
                <area
                shape="poly" coords="
                329,199,
                222,330,
                60,213,
                12,377,
                167,427,
                85,538,
                236,430,
                272,459,
                493, 246,
                329, 199
                "
                alt="donnie"
                onClick={checkAnswer}
                />

                <area
                shape="poly" coords="
                470,290,
                361,345,
                515,610,
                690,313,
                470,290
                "
                alt="raph"
                onClick={checkAnswer}
                />

                <area
                shape="poly" coords="
                319,452,
                23,638,
                38, 699,
                266, 574,
                229, 838,
                396, 897,
                526, 813,
                465, 722,
                628, 653,
                319,452
                "
                alt="leo"
                onClick={checkAnswer}
                />
            </map>
        </div>
    )
}

export default GameMap