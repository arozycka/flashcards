import React from "react";

const wordsGerman = [
    [
        {id: 1, german: "anbieten", polish: "proponować", correct: null},
        {id: 2, german: "anfangen", polish: "rozpoczynać", correct: null},
        {id: 3, german: "ansehen", polish: "oglądać", correct: null},
        {id: 4, german: "arbeiten", polish: "pracować", correct: null},
        {id: 5, german: "aussehen", polish: "wyglądać", correct: null},
        {id: 6, german: "bedeuten", polish: "znaczyć", correct: null},
        {id: 7, german: "beginnen", polish: "rozpoczynać", correct: null},
        {id: 8, german: "bekommen", polish: "otrzymywać", correct: null},
        {id: 9, german: "bestehen", polish: "zdać", correct: null},
        {id: 10, german: "betreffen", polish: "dotyczyć", correct: null},
    ],
    [
        {id: 11, german: "bieten", polish: "oferować", correct: null},
        {id: 12, german: "bilden", polish: "tworzyć", correct: null},
        {id: 13, german: "bleiben", polish: "pozostawać", correct: null},
        {id: 14, german: "brauchen", polish: "potrzebować", correct: null},
        {id: 15, german: "bringen", polish: "przynosić", correct: null},
        {id: 16, german: "darstellen", polish: "przedstawiać", correct: null},
        {id: 17, german: "denken ", polish: "myśleć", correct: null},
        {id: 18, german: "düfren", polish: "mieć pozwolenie", correct: null},
        {id: 19, german: "entsprechen ", polish: "być zgodnym z czymś", correct: null},
        {id: 20, german: "entstehen", polish: "powstawać", correct: null},
    ],
    [
        {id: 21, german: "entwickeln", polish: "rozwijać", correct: null},
        {id: 22, german: "ergeben", polish: "dawać w rezultacie", correct: null},
        {id: 23, german: "erhalten", polish: "otrzymywać", correct: null},
        {id: 24, german: "erinnern fuels", polish: "przypominać", correct: null},
        {id: 25, german: "erkennen", polish: "rozpoznawać", correct: null},
        {id: 26, german: "erklären", polish: "objaśniać", correct: null},
        {id: 27, german: "erreichen ", polish: "osiągać", correct: null},
        {id: 28, german: "erscheinen", polish: "ukazywać się", correct: null},
        {id: 29, german: "erwarten ", polish: "oczekiwać", correct: null},
        {id: 30, german: "erzählen", polish: "opowiadać", correct: null},
    ],
    [
        {id: 31, german: "fahren", polish: "jechać", correct: null},
        {id: 32, german: "fallen", polish: "upadać", correct: null},
        {id: 33, german: "fehlen", polish: "brakować", correct: null},
        {id: 34, german: "finden", polish: "znaleźć", correct: null},
        {id: 35, german: "folgen", polish: "iść za", correct: null},
        {id: 36, german: "fragen", polish: "pytać", correct: null},
        {id: 37, german: "fühlen ", polish: "czuć", correct: null},
        {id: 38, german: "führen", polish: "prowadzić", correct: null},
        {id: 39, german: "geben", polish: "dawać", correct: null},
        {id: 40, german: "gehen", polish: "iść", correct: null},
    ],
    [
        {id: 41, german: "gehören", polish: "należeć", correct: null},
        {id: 42, german: "gelten", polish: "obowiązywać", correct: null},
        {id: 43, german: "gewinnen", polish: "wygrywać", correct: null},
        {id: 44, german: "glauben", polish: "wierzyć", correct: null},
        {id: 45, german: "haben", polish: "mieć", correct: null},
        {id: 46, german: "halten", polish: "trzymać", correct: null},
        {id: 47, german: "handeln ", polish: "handlować", correct: null},
        {id: 48, german: "heißen", polish: "nazywać się", correct: null},
        {id: 49, german: "helfen ", polish: "pomagać", correct: null},
        {id: 50, german: "interessieren", polish: "interesować", correct: null},

    ],
    [
        {id: 51, german: "kennen", polish: "znać", correct: null},
        {id: 52, german: "kommen", polish: "przychodzić", correct: null},
        {id: 53, german: "können", polish: "móc", correct: null},
        {id: 54, german: "lassen", polish: "kazać", correct: null},
        {id: 55, german: "laufen", polish: "biec", correct: null},
        {id: 56, german: "leben", polish: "żyć", correct: null},
        {id: 57, german: "legen", polish: "kłaść", correct: null},
        {id: 58, german: "lernen", polish: "uczyć się", correct: null},
        {id: 59, german: "lesen ", polish: "czytać", correct: null},
        {id: 60, german: "liegen", polish: "leżeć", correct: null},

    ],
    [
        {id: 61, german: "machen", polish: "robić", correct: null},
        {id: 62, german: "meinen", polish: "uważać", correct: null},
        {id: 63, german: "mögen", polish: "lubić", correct: null},
        {id: 64, german: "müssen", polish: "musieć", correct: null},
        {id: 65, german: "nehmen", polish: "brać", correct: null},
        {id: 66, german: "nennen", polish: "nazywać", correct: null},
        {id: 67, german: "reden ", polish: "gadać", correct: null},
        {id: 68, german: "sagen", polish: "mówić", correct: null},
        {id: 69, german: "schaffen", polish: "stwarzać", correct: null},
        {id: 70, german: "scheinen", polish: "świecić", correct: null},

    ],
    [
        {id: 71, german: "schließen", polish: "zamykać", correct: null},
        {id: 72, german: "schreiben", polish: "pisać", correct: null},
        {id: 73, german: "sehen", polish: "widzieć", correct: null},
        {id: 74, german: "sein", polish: "być", correct: null},
        {id: 75, german: "setzen", polish: "siadać", correct: null},
        {id: 76, german: "sitzen", polish: "siedzieć", correct: null},
        {id: 77, german: "sollen ", polish: "mieć powinność ", correct: null},
        {id: 78, german: "spielen", polish: "grać", correct: null},
        {id: 79, german: "sprechen ", polish: "mówić", correct: null},
        {id: 80, german: "stehen", polish: "stać", correct: null},

    ],
    [
        {id: 81, german: "stellen", polish: "stawiać", correct: null},
        {id: 82, german: "studieren", polish: "studiować", correct: null},
        {id: 83, german: "suchen", polish: "szukać", correct: null},
        {id: 84, german: "tragen", polish: "nosić", correct: null},
        {id: 85, german: "treffen", polish: "spotykać", correct: null},
        {id: 86, german: "tun", polish: "czynić", correct: null},
        {id: 87, german: "verbinden", polish: "łączyć", correct: null},
        {id: 88, german: "vergehen", polish: "przemijać", correct: null},
        {id: 89, german: "vergleichen", polish: "porównywać", correct: null},
        {id: 90, german: "verlieren", polish: "gubić", correct: null},
    ],
    [{id: 91, german: "verstehen", polish: "rozumieć", correct: null},
        {id: 92, german: "versuchen", polish: "próbować", correct: null},
        {id: 93, german: "vorstellen", polish: "przedstawiać", correct: null},
        {id: 94, german: "warten", polish: "czekać", correct: null},
        {id: 95, german: "werden", polish: "stawać się", correct: null},
        {id: 96, german: "wissen", polish: "wiedzieć", correct: null},
        {id: 97, german: "wohnen ", polish: "mieszkać", correct: null},
        {id: 98, german: "wollen", polish: "chcieć", correct: null},
        {id: 99, german: "zeigen ", polish: "pokazywać", correct: null},
        {id: 100, german: "ziehen", polish: "ciągnąć", correct: null},
    ]
];

export default wordsGerman;