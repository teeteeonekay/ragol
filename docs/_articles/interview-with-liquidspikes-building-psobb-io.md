---
author: T_T1K
category: Interview
commentsUrl: https://forums.ragol.co.uk/showthread.php?tid=11743
coverImage: /assets/images/articles/interview-with-liquidspikes-building-psobb-io/cover.webp
date: 2026-05-01
title: "Interview with LiquidSpikes on Building PSOBB.io"
description: "LiquidSpikes is the developer behind PSOBB.io, a new Phantasy Star Online Blue Burst private server. We spoke to him about his history with PSO, how PSOBB.io came together, and what he’s working on next."
---

Interview with LiquidSpikes on Building PSOBB.io
================================================

LiquidSpikes is the developer behind [PSOBB.io](https://psobb.io){:target="_blank"}, a new Phantasy Star Online Blue Burst private server. We spoke to him about his history with PSO, how PSOBB.io came together, and what he’s working on next.

<div class="images" markdown="1">

[![Cover](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/cover.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/cover.webp){:target="_blank"}

</div>

<div class="contents" markdown="1">

Contents
--------

* [Introduction: Meet LiquidSpikes](#introduction-meet-liquidspikes)
* [Development: Building on Open Foundations](#development-building-on-open-foundations)
* [Features: Classic Gameplay, Modern Systems](#features-classic-gameplay-modern-systems)
* [Community: Open Development, Open Discussion](#community-open-development-open-discussion)
* [Future: What Comes Next](#future-what-comes-next)
* [Closing: Back to Ragol](#closing-back-to-ragol)

</div>

---

Introduction: Meet LiquidSpikes
-------------------------------

{% capture question %}
Hey Liquid! Is "Liquid" OK, or do you prefer "Spikes"?
{% endcapture %}
{% capture answer %}
Either works. Most people go with “Spike”, but I answer to both. It was just a gamertag I had back on the original Xbox.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
You obviously love Japanese video games — is “Liquid” a Metal Gear reference by any chance?
{% endcapture %}
{% capture answer %}
No, much dumber reason. I used to gel my hair into a wet, spiky look, with red or blue goop on the tips — basically, a “liquid-covered set of spikes”. I just kept using it as an online handle forever. I’m sure if you Google “LiquidSpikes” you’ll find me all over the place, as it’s been my handle for 25+ years.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
I am absolutely going to try to find a photo! [I failed. Here’s a spiky-haired HUmar screenshot instead. — Tee]
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}

{:.quote}
> Classic PSO gameplay has this unique atmosphere, pacing, music, and simplicity. I haven’t found anything else that feels like it.

{% capture question %}
Why PSO, all these years later? With games like Phantasy Star Online 2 carrying the series forward, what keeps you invested in Blue Burst?
{% endcapture %}
{% capture answer %}
For me, it’s a lifelong passion. I have loved PSO ever since I was a kid, going all the way back to the GameCube releases. I actually bought the game twice just so I could get my hands on the Episode I & II Plus edition! While games like PSO2 are still great-ish — I don’t care for New Genesis at the moment personally — they are fundamentally different experiences.

Classic PSO gameplay has this unique atmosphere, pacing, music, and simplicity. I haven’t found anything else that feels like it. The thing I think I love most is how good it feels to push an enemy back. A lot of modern MMOs feel shit by comparison, like you’re just spamming attacks with empty hits and random number damage.

My connection to the private server scene goes way back, too. I used to run a Schthack-based personal server just for my friends. I even remember burning 50+ copies of the PC client onto CDs and handing them out at my church camp. A bunch of people joined in and played for a while, but everyone thought I was a huge nerd.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

<div class="images" markdown="1">

* [![HUmar High Resolution Textures](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/high-resolution-textures-ramar.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/high-resolution-textures-ramar.webp){:target="_blank" title="Not a photo of LiquidSpikes, obviously."}
* [![FOnewearl High Resolution Textures](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/high-resolution-textures-fonewearl.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/high-resolution-textures-fonewearl.webp){:target="_blank" title="High-resolution textures are enabled by default, but you can disable them if you prefer."}

</div>

---

Development: Building on Open Foundations
-----------------------------------------

{% capture question %}
What originally inspired you to create PSOBB.io? Was there something missing from other PSO servers that you wanted to do differently?
{% endcapture %}
{% capture answer %}
To be honest, I bailed pretty hard on the PSO private server scene about 15 years ago. A big reason was the community’s shift away from open-source collaboration. Specifically, when the source code for what became Ephinea was closed, I was super disappointed. I understand the reasoning, but I didn’t agree with the philosophy.

The community culture back then wasn’t in a good place. It felt overly political, with a weird power dynamic between the devs, mods, staff, and players. Features were gatekept — like the dressing room — and player feedback was often dismissed. It felt like players were expected to be endlessly grateful just for the privilege of logging in, which never sat right with me.

My goal with PSOBB.io was to strip all that ego away and build a transparent, collaborative server where the staff and players are on the same level. I also want to create a platform of information so other private servers can thrive, too. Right now, we’re focused on fully reverse-engineering the client. You can see that work at [psobb.io/decryption](https://psobb.io/decryption){:target="_blank"}. It’s 50% complete and running on my own specialized AI model.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
PSOBB.io is built on [newserv](https://github.com/fuzziqersoftware/newserv){:target="_blank"} — how much have you extended or modified it to support your vision?
{% endcapture %}
{% capture answer %}
[newserv](https://github.com/fuzziqersoftware/newserv){:target="_blank"} is a fantastic open-source project. I have been following [FuzziqerSoftware](https://github.com/fuzziqersoftware){:target="_blank"} for years, and he has always been fantastic in the community. I was constantly going to his website to see if he was going to release his private server “Khyller” at the time, after Sodaboy killed off the [Tethealla](https://www.pioneer2.net/community/threads/tethealla-server-forums-removal.26365/){:target="_blank"} source. Fuzziqer never released his Khyller server.

I came across newserv when I started to look into PSO again in 2025. Seeing that it was thriving, open source, and actively improving made me happy. I do have plans to extend it with a web API — which I currently have working for PSOBB.io — and I also want to create a stats engine for future content ideas.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{:.quote}
> Right now, the core focus is ensuring the Blue Burst experience is as polished and perfect as possible.

{% capture question %}
PSOBB.io offers dedicated installers for Windows, macOS, and Steam Deck — was cross-platform support a goal from the start, or something that evolved over time?
{% endcapture %}
{% capture answer %}
Yes, I wanted to make sure I could make the client work for everyone. I know it’s not ideal on Mac currently — it’s using a DX8 → Wine → Metal shim — but it does work. It’s just not performant. I’m hoping to make a native Mac port once the source has been fully decompiled.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
Is PSOBB.io focused purely on Blue Burst, or are there plans to support other versions of PSO like Dreamcast, GameCube, or Xbox?
{% endcapture %}
{% capture answer %}
Right now, the core focus is ensuring the Blue Burst experience is as polished and perfect as possible before we decide to add additional platforms.

If console players do want to play on PSOBB.io, I’m willing to entertain the idea, but no one has asked for it at the moment. I would hope I could keep my reward systems and other features working on the server regardless of platform.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
What’s been the most technically challenging part of building or maintaining the server so far?
{% endcapture %}
{% capture answer %}
The biggest technical hurdle has been architecting the backend automation, specifically the reward system APIs. A major piece of that was building **Mission Control**, a custom voting Discord bot that automatically handles our weekly event rotations.

Orchestrating those automated state changes reliably is complex. The bot started with a fairly basic baseline, but I’m continuously iterating on its logic to make it more sophisticated and capable.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

<div class="images" markdown="1">

* [![Client Downloads](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/client-download.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/client-download.webp){:target="_blank" title="Good things come in threes."}
* [![Client Decryption](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/client-decryption.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/client-decryption.webp){:target="_blank" title="Progress: 83.3%. Keep hitting refresh to make it feel faster."}

</div>

---

Features: Classic Gameplay, Modern Systems
------------------------------------------

{% capture question %}
Do you see PSOBB.io as more of a “vanilla” experience, or something evolving beyond that?
{% endcapture %}
{% capture answer %}
It is definitely going to evolve. We are keeping the core gameplay, drop rates, and progression strictly *vanilla* to preserve that authentic feel. However, we’re building a modern layer on top of it. That means introducing up-to-date reward systems — like milestones and bounties — and implementing quality-of-life improvements that simply make the game feel better to play today.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
Are there any features or systems you’ve implemented that you’re particularly proud of — especially ones players might not immediately notice?
{% endcapture %}
{% capture answer %}
I am really proud of the modern reward systems we have built: the daily login bonus, bounty systems, milestone rewards, and the comprehensive player dashboard.

Also, there’s our Discord AI companion, **Mission Control**, which quietly runs the show behind the scenes to keep the server dynamic, fresh, and interesting.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{:.quote}
> Today we are not modifying the core gameplay much. Instead, the focus is on retrofitting modern quality-of-life systems.

{% capture question %}
How do you approach balancing changes versus staying true to the original PSO experience?
{% endcapture %}
{% capture answer %}
Today, we are not modifying the core gameplay much. Instead, the focus is on retrofitting modern quality-of-life systems and adding much-needed flexibility, like allowing players to change their Section IDs up until level 40.

Ultimately, I want to make sure players feel consistently rewarded for their time. We might explore balance changes in the future, but those will be strictly driven by community feedback.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

<div class="images" markdown="1">

* [![Hunter's License](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/login-hunters-license.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/login-hunters-license.webp){:target="_blank" title="Making a change on the website takes effect in-game instantly."}
* [![Login Bonus](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/login-bonus.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/login-bonus.webp){:target="_blank" title="Daily rewards? As if playing PSO daily wasn't reward enough!"}

</div>

---

Community: Open Development, Open Discussion
--------------------------------------------

{% capture question %}
Who is PSOBB.io for — veterans, new players, or both?
{% endcapture %}
{% capture answer %}
I am targeting both audiences. To support new players, our **Mission Control** bot acts as a safe, built-in guide to help them learn the game. On the flip side, we are heavily supporting the veteran creative community.

The next version of our launcher will introduce native mod support to make community creations way more accessible. If you can imagine the Forge launcher for Minecraft, but applied to PSOBB, that’s exactly what we are building.

I am actively looking for artists, hackers, and modders who want to be part of it.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
How much does player feedback shape PSOBB.io?
{% endcapture %}
{% capture answer %}
It is absolutely vital. Since our launch at the start of the year, the community has been actively helping identify pain points and bugs. I rolled out a reward system, but many said it was way overpowered, so I toned it down a bit.

I pretty consistently get new bugs thrown at me. I do have to remind people this is a passion project that I am doing with my limited free time.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{:.quote}
> By building and discussing things in the open, I am hoping to foster a community of players and developers who genuinely love PSO and just want to see the game thrive.

{% capture question %}
You’ve had developers and contributors joining the PSOBB.io Discord. How has that shaped the community?
{% endcapture %}
{% capture answer %}
When I set out to build PSOBB.io, I wanted to give back to the community as a whole. This is why I am investing so much effort in decompiling the client. It’s a major milestone for the community and could help take the game to the next level.

I think this act alone caused a buzz in the dev community. A lot of legends joined the Discord server very quickly after I put up the decompile dashboard, including [Sancaros](https://github.com/Sancaros){:target="_blank"} from the China server, [Repflez](https://github.com/Repflez){:target="_blank"}, [FuzziqerSoftware](https://github.com/fuzziqersoftware){:target="_blank"} from newserv, Raylend — admin of [PsoBB: Лакония/Laconia](https://vk.com/psobb_laconia){:target="_blank"} — and [KIREEK](https://kireekpso.wordpress.com){:target="_blank"}.

I want a transparent, collaborative environment, and that’s what I am seeing. A lot of the other private servers often have secrecy, walled gardens, or drama behind the scenes.

By building and discussing things in the open, I am hoping to foster a community of players and developers who genuinely love PSO and just want to see the game thrive.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

<div class="images" markdown="1">

* [![PSOBB.io Logo](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/logo.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/logo.webp){:target="_blank" title="It says \"Phantasy Star Online\" in Japanese, but you could've guessed."}
* [![PSOBB.io Poster](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/poster.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/poster.webp){:target="_blank" title="Momoka & friends."}

</div>

---

Future: What Comes Next
-----------------------

{% capture question %}
What’s next for PSOBB.io?
{% endcapture %}
{% capture answer %}
We’re continually refining the client and squashing bugs. Long term, I have a large, ever-growing roadmap of things I want to tackle — and I want feedback from others on it.

* Upgraded, truly modern client — I’m thinking a best-in-class **native** client with improved DX12, Metal, and Vulkan support.
* 2FA login for the game client.
* Upscaled HD art and assets — looking for artists!
* Mod support for the PSOBB.io Launcher — this is in progress.
* Global “community events”, such as slaying 1,000 Dragons as a community. They would be mapped to rewards, so the player who did the most could get a cool Mag skin or something.
* Leaderboards, tracking bounty completions, total quests completed, achievements, and more.
* Achievement systems — for example, maxing out a specific subclass, beating a specific difficulty, getting all the rare items, getting a perfect roll item, or evolving a specific Mag — for those who want to check all the boxes.
* Even higher difficulties beyond Ultimate, and more epic moments. Here are a few from my notes:
    * Spawning both Dal Ra Lie and De Rol Le at the same time, or both the Ice Dragon and Fire Dragon.
    * In Ruins, a scary, nightmarish, blacked-out Del Saber with red eyes and a scythe that hunts you down and follows you. It could even teleport to new rooms and floors, chasing you throughout Ruins 1, 2, and 3 as you constantly try to keep away and freeze it to get to the boss teleporter.
    * Maybe yet another form of a boss you are used to easily killing.

Things I dream about and hope to one day create:

* Future episodes — Episode V, Episode VI, and beyond.
* New subclasses. I have an idea for a subclass that is like Forces, but uses technology attacks, summons NPCs such as drones, or casts AOE effects like Vol Opt.
* New weapon types.
* Horde/Firefight mode — a wave-based survival mode.
* Hardcore mode — if you die, your character is toasted, aka deleted.
* Team PvP/insurgence areas, where teams could be dropped into an open-world elimination mode against other players.
* Mini-game modes. For example, I have this crazy idea for “Capture the Rappy”, a flag-style mode where you have to down a single Rappy and get it to your teleporter. Other players can attack you, and while you are carrying the Rappy you cannot fight. The Rappy will play dead until there is a firefight with another team, then try to run away. I think it would be chaotic fun.
* More players per instance — more than four players for various events or battles.
* NPC helpers — the ability to hire specific NPCs to help you in your adventures.
* Weapon crafting that doesn’t suck.
* Options for recycling rares for something that actually matters.
* Reverse engineer Episode III and put it in the game as a mode.
* Upscale and take items from PSØ/Zero.

... and there is so much more.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
That is an exciting roadmap! Somewhere in there is a modest weekend project, I’m sure.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}

<div class="images" markdown="1">

* [![Keyboard Mappings](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/keyboard-mappings.webp)](/assets/images/articles/interview-with-liquidspikes-building-psobb-io/keyboard-mappings.webp){:target="_blank" title="Pretty! We recommend using a gamepad, though."}

</div>

Closing: Back to Ragol
----------------------

{% capture question %}
When you’re not developing, what’s your favourite class to play and why?
{% endcapture %}
{% capture answer %}
I personally still love the RAmar. It was the first class I played and I keep coming back to it. I love the rifle-class weapons, even if it’s kinda cheese.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
And your favourite Mag?
{% endcapture %}
{% capture answer %}
[Bhirava](/guides/mags/#bhirava) is a personal favourite. I love almost all the twin Mags, to be honest.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{:.quote}
> I want to create moments of panic every once in a while to keep the game fresh and interesting.

{% capture question %}
Do you have a favourite area, boss, or moment in PSO that still stands out to you?
{% endcapture %}
{% capture answer %}
I loved the first time I played Ultimate mode and saw the different colour environments and enemies. It was so exciting and really made me want to play more. My favourite area is the Mines, or Spaceship from Episode II — they both have a similar look. My favourite boss was Vol Opt. I loved that the boss had so many layers and felt like such a team fight.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
If someone hasn’t tried PSOBB.io yet, what would you say to convince them to give it a go?
{% endcapture %}
{% capture answer %}
Everyone is welcome to the server. There has never been a better time to experience the magic of Phantasy Star Online.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
If you could secretly tweak one drop rate in PSO just to mess with players, what would it be?
{% endcapture %}
{% capture answer %}
I would like a super rare chance of a Forest run where all the enemy spawns are Hildetorrs with Shifta and Deband buffs. I am thinking, like, 20 show up in a room and you are scared out of your mind trying to figure out how to deal with them.

I would also like it so enemies suddenly followed you through rooms. Maybe they break through doors, gates, or teleports. I kinda want to create these moments of panic every once in a while to keep the game fresh and interesting.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

{% capture question %}
Thanks, Spike. Really appreciate your time.
{% endcapture %}
{% capture answer %}
I appreciate all that you do for the community, Tee!
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question %}
{% include interview-message.html type='answer' author='LiquidSpikes' authorRole='PSOBB.io' content=answer %}

---

{% capture question %}
Later, we asked LiquidSpikes a few follow-up questions:

* Is the PSOBB.io source code available? If so, do you see any downsides, especially around exposing things like the reward systems?
* Some players have asked about importing characters from other PSO servers. Is that something you’ve considered?
* Once things settle down, what’s the first new feature from your roadmap you’re most excited to work on?
{% endcapture %}
{% capture notes %}
See his answers on the [Discord thread](https://discord.com/channels/868803070421762060/1499900506447937807){:target="_blank"}.
{% endcapture %}
{% include interview-message.html type='question' author='T_T1K' authorRole='Ragol.co.uk' content=question notes=notes %}
