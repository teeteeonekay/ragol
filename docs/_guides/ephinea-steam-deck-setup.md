---
author: T_T1K
category: Ephinea
commentsUrl: https://forums.ragol.co.uk/showthread.php?tid=11699
coverImage: /assets/images/guides/ephinea-steam-deck-setup/cover.webp
date: 2026-03-24
description: "Step-by-step guide to running Ephinea PSO on Steam Deck with all action shortcuts and improved camera control."
---

Ephinea Steam Deck Setup
========================

[Ephinea Phantasy Star Online Blue Burst](https://ephinea.pioneer2.net){:target="_blank"} runs on Steam Deck, but some additional configuration is needed compared with Windows. This step-by-step guide shows you how to run Ephinea on a Steam Deck, enabling all action shortcuts and improving camera control.

<div class="contents" markdown="1">

Contents
--------

* [Step 1 - Download PSO](#step-1---download-pso)
* [Step 2 - Install PSO](#step-2---install-pso)
* [Step 3 - Add PSO to Steam](#step-3---add-pso-to-steam)
* [Step 4 - Install Protontricks](#step-4---install-protontricks)
* [Step 5 - Finished](#step-5---finished)
* [FAQs](#faqs)
* [Extras](#extras)

</div>

---

Step 1 - Download PSO
---------------------

First, switch to *Desktop Mode* and download PSO.

1. Select **Steam** → **Power** → **Switch to Desktop**.
2. Open **Firefox** from the taskbar. If prompted, install it via **Discover Software Center**.
3. Download [PSO](https://ephinea.pioneer2.net) to the `/home/deck/Downloads` folder.

{:.tip}
> Tip: In Desktop Mode, press `Steam + X` to open the on-screen keyboard when needed.

<div class="images" markdown="1">

* [![Download PSO - Switch to Desktop](/assets/images/guides/ephinea-steam-deck-setup/download-pso/switch-to-desktop.webp)](/assets/images/guides/ephinea-steam-deck-setup/download-pso/switch-to-desktop.webp){:target="_blank"}
* [![Download PSO - Ephinea](/assets/images/guides/ephinea-steam-deck-setup/download-pso/ephinea.webp)](/assets/images/guides/ephinea-steam-deck-setup/download-pso/ephinea.webp){:target="_blank"}

</div>

---

Step 2 - Install PSO
--------------------

To install PSO, add the installer to Steam and run it using Proton.

1. Open **Dolphin** (Steam Deck's file explorer).
2. Navigate to `/home/deck/Downloads`.
3. Right-click `Ephinea_PSOBB_Installer.exe` → **Add to Steam**.
4. Open Steam and find the installer in your library.
5. Click **Manage** → **Properties**.
6. Click **Compatibility**.
7. Enable **Force the use of a specific Steam Play compatibility tool**.
8. Select **Proton 10.0-4**.
9. Close the window, then click **Play**.
10. Follow the installer prompts, using `C:\EphineaPSO` as the destination folder when asked.
11. After a few minutes, the installer should complete.

{:.tip}
> Tip: Hold the **Steam** button while using the trackpad to control the mouse in Windows applications.

<div class="images" markdown="1">

* [![Install PSO - Add to Steam](/assets/images/guides/ephinea-steam-deck-setup/install-pso/add-to-steam.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/add-to-steam.webp){:target="_blank"}
* [![Install PSO - Properties](/assets/images/guides/ephinea-steam-deck-setup/install-pso/properties.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/properties.webp){:target="_blank"}
* [![Install PSO - Proton](/assets/images/guides/ephinea-steam-deck-setup/install-pso/proton.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/proton.webp){:target="_blank"}
* [![Install PSO - Play](/assets/images/guides/ephinea-steam-deck-setup/install-pso/play.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/play.webp){:target="_blank"}
* [![Install PSO - Installer](/assets/images/guides/ephinea-steam-deck-setup/install-pso/installer.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/installer.webp){:target="_blank"}
* [![Install PSO - Completed](/assets/images/guides/ephinea-steam-deck-setup/install-pso/completed.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-pso/completed.webp){:target="_blank"}

</div>

---

Step 3 - Add PSO to Steam
-------------------------

Now we’ll point Steam to the installed game instead of the installer.

1. Open **Dolphin** and enable **Show Hidden Files**.
2. Navigate to `/home/deck/.local/share/Steam/steamapps/compatdata`.
3. Sort by **Newest First**.
4. Open the newest numbered folder.
5. Navigate to `/pfx/drive_c/EphineaPSO`.
6. Right-click `online.exe` → **Copy Location**.
7. Open Steam and find the installer entry in your library.
8. Click **Manage** → **Properties** → **Shortcut**.
9. Paste into **TARGET**, with quotes (e.g. `"/home/deck/.local/share/Steam/steamapps/compatdata/3954759615/pfx/drive_c/EphineaPSO/online.exe"`).
10. Paste into **START IN**, without quotes or a filename (e.g. `/home/deck/.local/share/Steam/steamapps/compatdata/3954759615/pfx/drive_c/EphineaPSO/`).
11. Rename the shortcut to **Phantasy Star Online Blue Burst**.

{:.tip}
> Tip: Use Dolphin's **Copy Location** to avoid typos when entering paths.

<div class="images" markdown="1">

* [![Add PSO to Steam - Show Hidden Files](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/show-hidden-files.webp)](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/show-hidden-files.webp){:target="_blank"}
* [![Add PSO to Steam - Sort By](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/sort-by.webp)](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/sort-by.webp){:target="_blank"}
* [![Add PSO to Steam - Copy Location](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/copy-location.webp)](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/copy-location.webp){:target="_blank"}
* [![Add PSO to Steam - Shortcut](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/shortcut.webp)](/assets/images/guides/ephinea-steam-deck-setup/add-pso-to-steam/shortcut.webp){:target="_blank"}

</div>

---

Step 4 - Install Protontricks
-----------------------------

By default, Proton uses Windows 10 mode, but Ephinea works more reliably with Windows 7. Protontricks provides an easy way to change this.

1. Open **Discover Software Center**.
2. Search for and install **Protontricks**.
3. Open **Protontricks**.
4. Select **Phantasy Star Online Blue Burst**.
5. Select **default wineprefix**.
6. Select **Run winecfg**.
7. Set **Windows Version** to **Windows 7**, then click **Apply**.

<div class="images" markdown="1">

* [![Install Protontricks - Install from Flathub](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/install-from-flathub.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/install-from-flathub.webp){:target="_blank"}
* [![Install Protontricks - Open Protontricks](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/open-protontricks.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/open-protontricks.webp){:target="_blank"}
* [![Install Protontricks - Select PSO](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/select-pso.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/select-pso.webp){:target="_blank"}
* [![Install Protontricks - Select Default Wineprefix](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/select-default-wine-prefix.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/select-default-wine-prefix.webp){:target="_blank"}
* [![Install Protontricks - Run winecfg](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/run-winecfg.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/run-winecfg.webp){:target="_blank"}
* [![Install Protontricks - Windows Version](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/windows-version.webp)](/assets/images/guides/ephinea-steam-deck-setup/install-protontricks/windows-version.webp){:target="_blank"}

</div>

---

Step 5 - Finished
-----------------

Restart your Steam Deck into *Gaming Mode* and launch the game from your library.

<div class="images" markdown="1">

* [![Finished - Play](/assets/images/guides/ephinea-steam-deck-setup/finished/play.webp)](/assets/images/guides/ephinea-steam-deck-setup/finished/play.webp){:target="_blank"}
* [![Finished - Launcher](/assets/images/guides/ephinea-steam-deck-setup/finished/launcher.webp)](/assets/images/guides/ephinea-steam-deck-setup/finished/launcher.webp){:target="_blank"}
* [![Finished - Sonic Team](/assets/images/guides/ephinea-steam-deck-setup/finished/sonic-team.webp)](/assets/images/guides/ephinea-steam-deck-setup/finished/sonic-team.webp){:target="_blank"}
* [![Finished - Phantasy Star Online Blue Burst](/assets/images/guides/ephinea-steam-deck-setup/finished/pso-bb.webp)](/assets/images/guides/ephinea-steam-deck-setup/finished/pso-bb.webp){:target="_blank"}

</div>

---

<div class="faqs" markdown="1">

FAQs
----

### How do I open the on-screen keyboard in Desktop Mode?

Press `Steam + X`.

### My mouse is stuck and won't move

Hold the **Steam** button while using the trackpad to control the mouse in Windows applications.

### Why use Protontricks?

It avoids the need for terminal commands, making the setup simpler for beginners.

### Why not use Lutris?

At the time of writing, there are issues with Lutris and Ephinea. Using Steam keeps things simple and reduces the chances of other issues occurring.

</div>

---

Extras
------

### Gamepad

Ephinea supports gamepads, but some additional configuration is needed to make them fully functional. The [Ephinea Gamepad Setup](/guides/ephinea-gamepad-setup/) guide shows you how to set up a gamepad for Ephinea, enabling all action shortcuts and improving camera control. It works great for Steam Deck too!

### Font

Ephinea uses **Tahoma** as the default in-game font, but also includes two additional fonts: **Dotum** and **Gulim**. The [Ephinea Font Setup](/guides/ephinea-font-setup/) guide shows you where to find the fonts and how to install them on both Windows and Steam Deck.
