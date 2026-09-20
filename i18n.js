window.uiLang = (function(){
  try{
    const s = localStorage.getItem('uiLang') || (navigator.language||'en').slice(0,2);
    return (s==='fr'||s==='es') ? s : 'en';
  }catch(e){ return 'en'; }
})();
window.I18N = {
  en:{
    headerSub:'Your plan. Your hours. Your progress.',
    tabTrain:'Train', tabPrograms:'Programs', tabCreate:'Create', tabMeals:'Meals', tabProgress:'Progress', tabClub:'Club',
    workoutProgram:'Work Out Program', allPrograms:'All programs',
    wake:'Wake', trainLbl:'Train', lightsOut:'Lights out',
    wakeSub:'Set your morning', trainSub:'Session start', sleepSub:'Protect sleep',
    levelSession:'Level for this session', weekStarts:'Program week starts on', save:'SAVE',
    eatToday:'How to eat today',
    waterToday:'Water today', whatIAte:'What I ate today', everydayMeals:'Everyday meal plan',
    plateRules:'Simple plate rules', whenChange:'When you will see a change',
    addMeal:'ADD',
    watch:'Watch form video ▶', restDay:'Rest day', done:'done',
    start:'Start', untitled:'Untitled', daysMoves:'days with moves', starts:'starts',
    homeKit:'Home kit', formVideo:'Form video',
    sun:'Sunday', mon:'Monday', tue:'Tuesday', wed:'Wednesday', thu:'Thursday', fri:'Friday', sat:'Saturday',
    beginner:'Beginner', semipro:'Semi-pro', pro:'Pro',
    gAll:'All', gHome:'Home', gChest:'Chest', gBack:'Back', gShoulders:'Shoulders', gBiceps:'Biceps', gTriceps:'Triceps', gCore:'Belly', gQuads:'Quads', gHams:'Hamstrings', gGlutes:'Glutes', gCalves:'Calves', gSkill:'Skill / Flag', gFull:'Full body',
    step1:'Step 1 — pick your level',
    step2:'Step 2 — pick a Work Out Program',
    mySaved:'My saved programs',
    createMy:'Create my Work Out Program',
    progName:'Program name',
    weekStartsOn:'Week starts on',
    trainDays:'Training days this week',
    dayToEdit:'Day to edit',
    muscleToTrain:'Muscle to train — tap a card with its picture',
    orType:'Or type an exercise name',
    addExercise:'Add exercise',
    saveProgram:'SAVE PROGRAM',
    newProgram:'+ New program',
    followTitle:'Programs you follow',
    dayStreak:'day streak',
    fullDays:'full days this month',
    allDone:'All done', partial:'Partial', missed:'Missed',
    clubTitle:'Club membership',
    putOnPhone:'Put DMWC on your phone',
    iphone:'iPhone', android:'Android'
  },
  fr:{
    headerSub:'Votre plan. Vos horaires. Votre progression.',
    tabTrain:'Séance', tabPrograms:'Programmes', tabCreate:'Créer', tabMeals:'Repas', tabProgress:'Progrès', tabClub:'Club',
    workoutProgram:'Programme d’entraînement', allPrograms:'Tous les programmes',
    wake:'Réveil', trainLbl:'Séance', lightsOut:'Coucher',
    wakeSub:'Matin', trainSub:'Début de séance', sleepSub:'Protéger le sommeil',
    levelSession:'Niveau de cette séance', weekStarts:'La semaine commence le', save:'ENREGISTRER',
    eatToday:'Comment manger aujourd’hui',
    waterToday:'Eau aujourd’hui', whatIAte:'Ce que j’ai mangé', everydayMeals:'Plan repas du quotidien',
    plateRules:'Règles d’assiette', whenChange:'Quand le changement se voit',
    addMeal:'AJOUTER',
    watch:'Voir la vidéo ▶', restDay:'Jour de repos', done:'faits',
    start:'Début', untitled:'Sans titre', daysMoves:'jours avec exercices', starts:'commence',
    homeKit:'Maison', formVideo:'Vidéo de forme',
    sun:'Dimanche', mon:'Lundi', tue:'Mardi', wed:'Mercredi', thu:'Jeudi', fri:'Vendredi', sat:'Samedi',
    beginner:'Débutant', semipro:'Semi-pro', pro:'Pro',
    gAll:'Tout', gHome:'Maison', gChest:'Pectoraux', gBack:'Dos', gShoulders:'Épaules', gBiceps:'Biceps', gTriceps:'Triceps', gCore:'Abdos', gQuads:'Quadriceps', gHams:'Ischios', gGlutes:'Fessiers', gCalves:'Mollets', gSkill:'Skill / Flag', gFull:'Corps entier',
    step1:'Étape 1 — choisissez votre niveau',
    step2:'Étape 2 — choisissez un programme',
    mySaved:'Mes programmes enregistrés',
    createMy:'Créer mon programme',
    progName:'Nom du programme',
    weekStartsOn:'La semaine commence le',
    trainDays:'Jours d’entraînement cette semaine',
    dayToEdit:'Jour à modifier',
    muscleToTrain:'Muscle à travailler — touchez une carte avec photo',
    orType:'Ou tapez un nom d’exercice',
    addExercise:'Ajouter l’exercice',
    saveProgram:'ENREGISTRER LE PROGRAMME',
    newProgram:'+ Nouveau programme',
    followTitle:'Programmes suivis',
    dayStreak:'jours de suite',
    fullDays:'jours complets ce mois',
    allDone:'Terminé', partial:'Partiel', missed:'Manqué',
    clubTitle:'Adhésion au club',
    putOnPhone:'Mettre DMWC sur le téléphone',
    iphone:'iPhone', android:'Android'
  },
  es:{
    headerSub:'Tu plan. Tus horas. Tu progreso.',
    tabTrain:'Entreno', tabPrograms:'Programas', tabCreate:'Crear', tabMeals:'Comidas', tabProgress:'Progreso', tabClub:'Club',
    workoutProgram:'Programa de entrenamiento', allPrograms:'Todos los programas',
    wake:'Despertar', trainLbl:'Entreno', lightsOut:'Apagar luces',
    wakeSub:'Tu mañana', trainSub:'Inicio de sesión', sleepSub:'Protege el sueño',
    levelSession:'Nivel de esta sesión', weekStarts:'La semana empieza el', save:'GUARDAR',
    eatToday:'Cómo comer hoy',
    waterToday:'Agua de hoy', whatIAte:'Lo que comí hoy', everydayMeals:'Plan de comidas diario',
    plateRules:'Reglas del plato', whenChange:'Cuándo se nota el cambio',
    addMeal:'AÑADIR',
    watch:'Ver vídeo ▶', restDay:'Día de descanso', done:'hechos',
    start:'Inicio', untitled:'Sin título', daysMoves:'días con ejercicios', starts:'empieza',
    homeKit:'Casa', formVideo:'Vídeo de técnica',
    sun:'Domingo', mon:'Lunes', tue:'Martes', wed:'Miércoles', thu:'Jueves', fri:'Viernes', sat:'Sábado',
    beginner:'Principiante', semipro:'Semi-pro', pro:'Pro',
    gAll:'Todo', gHome:'Casa', gChest:'Pecho', gBack:'Espalda', gShoulders:'Hombros', gBiceps:'Bíceps', gTriceps:'Tríceps', gCore:'Abdomen', gQuads:'Cuádriceps', gHams:'Isquios', gGlutes:'Glúteos', gCalves:'Gemelos', gSkill:'Skill / Flag', gFull:'Cuerpo entero',
    step1:'Paso 1 — elige tu nivel',
    step2:'Paso 2 — elige un programa',
    mySaved:'Mis programas guardados',
    createMy:'Crear mi programa',
    progName:'Nombre del programa',
    weekStartsOn:'La semana empieza el',
    trainDays:'Días de entreno esta semana',
    dayToEdit:'Día a editar',
    muscleToTrain:'Músculo a trabajar — toca una tarjeta con foto',
    orType:'O escribe un ejercicio',
    addExercise:'Añadir ejercicio',
    saveProgram:'GUARDAR PROGRAMA',
    newProgram:'+ Programa nuevo',
    followTitle:'Programas que sigues',
    dayStreak:'días seguidos',
    fullDays:'días completos este mes',
    allDone:'Hecho', partial:'Parcial', missed:'Fallado',
    clubTitle:'Membresía del club',
    putOnPhone:'Pon DMWC en el teléfono',
    iphone:'iPhone', android:'Android'
  }
};
function t(key){
  const pack = window.I18N[window.uiLang] || window.I18N.en;
  return (pack && pack[key]) || window.I18N.en[key] || key;
}
function setLang(code){
  window.uiLang = (code==='fr'||code==='es') ? code : 'en';
  try{ localStorage.setItem('uiLang', window.uiLang); }catch(e){}
  applyLang();
  try{ if(typeof paintStartRows==='function') paintStartRows(); }catch(e){}
  try{ if(typeof paintMuscleGroups==='function') paintMuscleGroups(); }catch(e){}
  try{ if(typeof renderToday==='function') renderToday(); }catch(e){}
  try{ if(typeof renderBuilder==='function') renderBuilder(); }catch(e){}
  try{ if(typeof fillPlanSelect==='function') fillPlanSelect(); }catch(e){}
}
function applyLang(){
  document.documentElement.lang = window.uiLang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k = el.getAttribute('data-i18n');
    if(k) el.textContent = t(k);
  });
  document.querySelectorAll('#langRow .lang-btn').forEach(btn=>{
    const code = (btn.getAttribute('data-lang')||btn.textContent||'').trim().toLowerCase();
    btn.classList.toggle('on', code===window.uiLang);
  });
}
