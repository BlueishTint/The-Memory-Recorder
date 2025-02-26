window.addEventListener("load", function () {
  //i wanted to add music throughout but no time :(
  async function runTyping() {
    const f = friendLines;
    const r = rileyLines;
    const d = depressionLines;
    const m = momLines;
    const o = ocdLines;

    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    const opt3 = document.getElementById("opt3");

    const box1 = document.getElementById("box3");
    const box2 = document.getElementById("box4");
    const box3 = document.getElementById("box5");
    const box4 = document.getElementById("box6");

    await typewriter("[JUNE 30, 2022]", box1, 100);
    await typewriter("[001: THE VOID OF DEPRESSION]", box2, 100);
    await typewriter("[MEMORY BEGIN]", box3, 100);
    await sleep(3000);

    await reverseTypewriter(box3.textContent.length, box3, 100);
    await reverseTypewriter(box2.textContent.length, box2, 100);
    await reverseTypewriter(box1.textContent.length, box1, 100);
    await sleep(1000);

    await playSound("assets/audio/sfxs/schoolAlarm.mp3");
    await playLine(f, 1, box1, 50, 500);
    await playLine(r, 1, box2, 50, 500);
    await playLine(f, 2, box3, 50, 1000);

    await clearLines(box1, box2, box3, 1000);

    await playLine(r, 2, box1, 50, 500);
    await playLine(f, 3, box2, 50, 500);

    await clearLines(box1, box2, box3, 5000);

    //add traffic noises
    await playLine(r, 3, box1, 75, 5000);
    await playLine(m, 1, box2, 100, 2000);

    await clearLines(box1, box2, box3, 1000);

    await typewriter(
      "<< PLAYER CHOICES: YOU HAVE 20 ENERGY AND 50 HAPPINESS OUT OF A MAX OF 100 EACH. YOU MAY NOT CHOOSE OPTIONS THAT WOULD REDUCE EITHER VALUE TO BELOW 0. HOW WOULD YOU LIKE TO RESPOND?",
      box1,
      50
    );
    await typewriter(
      "<< OPTION 1: TALK TO YOUR MOM ABOUT EVERYTHING. (-50 ENERGY, -50 HAPPINESS",
      box2,
      50
    );
    await typewriter(
      "<< OPTION 2: STAY SILENT ON THE TOPIC. (0 ENERGY, 0 ENERGY)",
      box3,
      500
    );

    await opt1.classList.add("disabled2");
    await new Promise(async (resolve) => {
      await opt2.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await clearLines(box1, box2, box3, 1000);
        await opt2.removeEventListener("click");
        resolve();
      });
    });

    await show(opt1);
    await show(opt2);

    await playLine(r, 4, box1, 100, 2000);
    await playLine(d, 1, box2, 50, 1000);
    await playLine(r, 5, box3, 100, 500);

    await clearLines(box1, box2, box3, 1000);
    await playLine(o, 1, box1, 100, 2000);
    await clearLines(box1, box2, box3, 1000);

    //alarm, sirens, countdown from 10 secs to emphasize panic
    await typewriter(
      "<< PLAYER CHOICES: YOU HAVE 20 ENERGY AND 30 HAPPINESS LEFT. HOW WOULD YOU LIKE TO RESPOND?",
      box1,
      100
    );
    await typewriter(
      "<< OPTION 1: FIGHT THE THOUGHT OFF. (-20 ENERGY, -10 HAPPINESS).",
      box2,
      100
    );
    await typewriter(
      "<< OPTION 2: STOMACH THE ANXIETY. (-20 ENERGY, -10 HAPPINESS).",
      box3,
      100
    );

    await opt1.classList.remove("disabled2");

    await new Promise(async (resolve) => {
      await opt1.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await clearLines(box1, box2, box3, 1000);
        await playLine(r, 6, box1, 100, 1000);
        await clearLines(box1, box2, box3, 1000);
        opt1.removeEventListener("click");
        opt2.removeEventListener("click");
        resolve();
      });
    });

    await new Promise(async (resolve) => {
      await opt2.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await clearLines(box1, box2, box3, 1000);
        await opt1.removeEventListener("click");
        await opt2.removeEventListener("click");
        resolve();
      });
    });

    await show(opt1);
    await show(opt2);

    await typewriter("<< YOU ARE HOME.", box1, 100);
    await playLine(r, 7, box2, 100, 1000);
    await playLine(d, 2, box3, 50, 1000);
    await playLine(r, 8, box4, 100, 2000);
    await clearLines(box1, box2, box3, 100);
    await clearLines(box2, box3, box4, 9000);

    await typewriter(
      "<< PLAYER CHOICES: YOU ARE OVERWHELMED. YOU HAVE 0 ENERGY AND 20 HAPPINESS.",
      box1,
      100
    );
    await typewriter(
      "<< OPTION 1: TRY DEEP BREATHING. (??? ENERGY, ??? HAPPINESS).",
      box2,
      100
    );
    await typewriter(
      "<< OPTION 2: TRY CREATIVE EXPRESSION. (??? ENERGY, ??? HAPPINESS).",
      box3,
      100
    );
    await typewriter(
      "<< OPTION 1: TRY PHYSICAL EXERCISE. (??? ENERGY, ??? HAPPINESS).",
      box4,
      100
    );

    await new Promise(async (resolve) => {
      await opt1.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await hide(opt3);
        await clearLines(box1, box2, box3, 100);
        await clearLines(box1, box2, box4, 900);
        await typewriter(
          "<< YOU ARE TOO FATIGUED TO SUCESSFULLY TRY THE BREATHING TECHNIQUES (REQUIRES 10 ENERGY).",
          box1,
          100
        );
        await playLine(d, 3, box2, 50, 1000);
        await clearLines(box1, box2, box3, 1000);
        await opt1.removeEventListener("click");
        await opt2.removeEventListener("click");
        await opt3.removeEventListener("click");
        resolve();
      });
    });

    await new Promise(async (resolve) => {
      await opt2.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await hide(opt3);
        await clearLines(box1, box2, box3, 100);
        await clearLines(box1, box2, box4, 900);
        await typewriter(
          "<< YOU ARE TOO FATIGUED TO ATTEMPT CREATIVE EXPRESSION. (REQUIRES 20 ENERGY).",
          box1,
          100
        );
        await playLine(d, 4, box2, 100, 1000);
        await playLine(r, 9, box2, 100, 1000);
        await clearLines(box1, box2, box3, 1000);
        await opt1.removeEventListener("click");
        await opt2.removeEventListener("click");
        await opt3.removeEventListener("click");
        resolve();
      });
    });

    await new Promise(async (resolve) => {
      await opt3.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await hide(opt3);
        await clearLines(box1, box2, box3, 100);
        await clearLines(box1, box2, box4, 900);
        await typewriter(
          "<< YOU ARE TOO FATIGUED TO ATTEMPT THE PHYSICAL EXERCISE. (REQUIRES 30 ENERGY).",
          box1,
          100
        );
        await playLine(d, 5, box2, 100, 1000);
        await clearLines(box1, box2, box3, 1000);
        await opt1.removeEventListener("click");
        await opt2.removeEventListener("click");
        await opt3.removeEventListener("click");
        resolve();
      });
    });

    await playLine(r, 10, box1, 100, 1000);
    await playLine(r, 11, box2, 100, 1000);
    await playLine(d, 6, box3, 100, 1000);
    await playLine(o, 2, box4, 100, 1000);

    await clearLines(box1, box2, box3, 100);
    await clearLines(box2, box3, box4, 900);

    //add countdown, sirens
    await typewriter(
      "<< PLAYER CHOICES: YOU HAVE 0 ENERGY AND 20 HAPPINESS.",
      box1,
      100
    );
    await typewriter(
      "<< OPTION 1: CHECK THE ROOM. (0 ENERGY, -20 HAPPINESS).",
      box2,
      100
    );
    await typewriter(
      "<< OPTION 2: DON'T CHECK THE ROOM AND CHALLENGE YOUR OCD. (-30 ENERGY, -20 HAPPINESS).",
      box3,
      100
    );

    await opt2.classList.add("disabled2");

    await new Promise(async (resolve) => {
      await opt1.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await clearLines(box1, box2, box3, 1000);
        await opt1.removeEventListener("click");
        resolve();
      });
    });

    await show(opt1);
    await show(opt2);

    await typewriter(
      "<< YOU GO AND CHECK AND OF COURSE THERE IS... NOTHING",
      box1,
      100
    );
    await playLine(d, 7, box2, 100, 1000);
    await playLine(r, 12, box3, 100, 1000);
    await clearLines(box1, box2, box3, 1000);

    await playLine(d, 8, box1, 100, 1000);
    await playLine(r, 13, box2, 100, 1000);
    await playLine(d, 9, box3, 100, 1000);
    await clearLines(box1, box2, box3, 1000);

    await playLine(r, 14, box1, 100, 1000);
    await playLine(d, 10, box2, 100, 1000);
    await playLine(r, 15, box3, 100, 1000);
    await clearLines(box1, box2, box3, 1000);

    await typewriter(
      "<< YOU WRITE A NOTE, SIMPLY READING, 'I'm sorry. Goodbye. Don't miss me. -Riley'",
      box1,
      100
    );
    await typewriter(
      "<< IT FEELS AS IF DEPRESSION TOOK OVER YOUR BODY. YOU CANNOT MOVE IT; IT'S MOVING ON ITS OWN.",
      box2,
      1000
    );
    await typewriter(
      "<< YOU STAND BY AND HORRIFIED, WATCH AS DEPRESSION TAKES A KNIFE AND MOVES TO SLIT YOUR WRISTS.",
      box3,
      1000
    );
    await clearLines(box1, box2, box3, 1000);

    await playLine(r, 16, box1, 100, 1000);
    await playLine(d, 11, box2, 100, 1000);
    await clearLines(box1, box2, box3);

    await typewriter(
      "<< PLAYER CHOICES: YOU HAVE LOST CONTROL OF YOUR BODY. YOU HAVE 0 ENERGY AND 0 HAPPINESS.",
      box1,
      100
    );
    await typewriter(
      "<< OPTION 1: RESIST AGAINST DEPRESSION. (-50 ENERGY, -10 HAPPINESS).",
      box2,
      100
    );
    await typewriter(
      "<< OPTION 2: STOP RESISTING. (0 ENERGY, 0 HAPPINESS)",
      box3,
      100
    );

    await opt2.classList.remove("disabled2");
    await opt1.classList.add("disabled2");
    await new Promise(async (resolve) => {
      await opt2.addEventListener("click", async function () {
        await hide(opt1);
        await hide(opt2);
        await clearLines(box1, box2, box3, 1000);
        await opt2.removeEventListener("click");
        resolve();
      });
    });

    await show(opt1);
    await show(opt2);

    await typewriter(
      "<< DEPRESSION SLITS YOUR WRISTS. THE LAST THING YOU REMEMBER IS BLEEDING OUT BEFORE BLACKING OUT AND WAKING UP IN THE HOSPITAL.",
      box1,
      100
    );
    await clearLines(box1, box2, box3);
    await typewriter("[MEMORY END]", box1, 100);
    await reverseTypewriter(box1.textContent.length, box1, 100);
    await sleep(2000);
    await typewriter(
      "As someone who has had a history with OCD and depression, I often see people who do not understand the conditions, which is normal, but if they do not understand the suffering that many people with these disorders go through, it is neigh impossible for them to empathize with individuals who need their support. I frequently see many people saying insensitive things about these mental illnesses and I wanted to create something like a simulation of various commonly misunderstood and stereotyped situations, so people can take the first step towards empathy. If we do not have empathy, it is very easy for people to be oppressed and for society to come crumbling down. Empathy is one of the building blocks of community.",
      box2,
      25
    );
    await typewriter(
      "OCD, or Obsessive-Compulsive Disorder, is a mental illness in which someone is caught in a cycle of of obsessions and compulsions. Obsessions are unwanted and intrusive thoughts that trigger very distressing feelings, while compulsions are things one does to try to alieve those bad feelings. For more information, visit sites like iocdf.org. Depression, on the other hand, is a serious mental illness that affects one's mood quite negatively. There are many different types of depression, and symptoms for both OCD and depression vary drastically among different people. What I protrayed in this project was in no way the only way people experience these mental illnesses. I encourage you to do your own research and learn more about these topics.",
      box3,
      25
    );
    await show(document.getElementById("continue2"));
    await document
      .getElementById("continue2")
      .addEventListener("click", function () {
        switchPages(index.html);
      });
  }
  runTyping();
});
