---
author: T_T1K
category: Ephinea
date: 2026-03-10
description: "Step-by-step guide to setting up a gamepad for Ephinea with all action shortcuts and improved camera control."
image: /assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-step-5.webp
---

Ephinea Gamepad Setup
=====================

[Phantasy Star Online: Blue Burst on the Ephinea private server](https://ephinea.pioneer2.net){:target="_blank"} supports gamepads, but some additional configuration is needed to make them fully functional. This step-by-step guide shows you how to set up a gamepad for Ephinea, enabling all action shortcuts and improving camera control.

Contents
--------

* [Mappings](#mappings)
* [Step 1 - Add PSO to Steam](#step-1---add-pso-to-steam)
* [Step 2 - Enable Steam Input for PSO](#step-2---enable-steam-input-for-pso)
* [Step 3 - Apply a Steam Button Layout](#step-3---apply-a-steam-button-layout)
* [Step 4 - Enable Gamepad](#step-4---enable-gamepad)
* [Step 5 - Enable Analog Camera Control](#step-5---enable-analog-camera-control)
* [Step 6 - Update Keyboard Mappings](#step-6---update-keyboard-mappings)
* [Step 7 - Update Gamepad Mappings](#step-7---update-gamepad-mappings)
* [Step 8 - Enable Ctrl Shortcuts](#step-8---enable-ctrl-shortcuts)
* [Step 9 - Finished](#step-9---finished)
* [FAQs](#faqs)
* [Original Keyboard Mappings](#original-keyboard-mappings)

---

Mappings
--------

Following this guide will result in the button mappings below. The triggers act as modifiers, allowing access to all ten action shortcuts while keeping the main action palette on the face buttons, similar to the original console controls.

### Movement

| Gamepad Button      | Keyboard Key | Mapping                           |
| ------------------- | ------------ | --------------------------------- |
| `Left Stick`        | `W``A``S``D` | Move                              |
| `Left Stick Click`  | `Q`          | Auto Run                          |
| `Right Stick`       |              | Adjust Camera                     |
| `Right Stick Click` | `↑`          | Center Camera                     |
| `LB`                | `↑`          | Center Camera / Prev Page         |

### Action Palette

| Gamepad Button      | Keyboard Key | Mapping                           |
| ------------------- | ------------ | --------------------------------- |
| `A`                 | `↓`          | Action Palette Middle             |
| `B`                 | `→`          | Action Palette Right              |
| `X`                 | `←`          | Action Palette Left               |
| `Y`                 | `End`        | Action Palette Top                |
| `RB`                | `Ctrl`       | Change Action Palette / Next Page |

### Action Shortcuts

| Gamepad Button      | Keyboard Key | Mapping                           |
| ------------------- | ------------ | --------------------------------- |
| `RT + A`            | `1`          | Action Shortcut 1                 |
| `RT + X`            | `2`          | Action Shortcut 2                 |
| `RT + B`            | `3`          | Action Shortcut 3                 |
| `RT + Y`            | `4`          | Action Shortcut 4                 |
| `LT + A`            | `5`          | Action Shortcut 5                 |
| `LT + X`            | `6`          | Action Shortcut 6                 |
| `LT + B`            | `7`          | Action Shortcut 7                 |
| `LT + Y`            | `8`          | Action Shortcut 8                 |
| `RT + LT + A`       | `9`          | Action Shortcut 9                 |
| `RT + LT + X`       | `0`          | Action Shortcut 10                |

### Other

| Gamepad Button      | Keyboard Key | Mapping                           |
| ------------------- | ------------ | --------------------------------- |
| `Menu`              | `Home`       | Main Menu                         |
| `View`              | `Ctrl + M`   | Map                               |
| `RT + LT + B`       | `Esc`        | Cancel                            |
| `RT + LT + Y`       | `Tab`        | Character Info. Change            |
| `RT + ↑`            | `F1`         | Display F Key Functions           |
| `RT + →`            | `F2`         | Equipment                         |
| `RT + ↓`            | `F3`         | Technique                         |
| `RT + ←`            | `F4`         | Mag                               |
| `LT + ↑`            | `F5`         | Guild Card                        |
| `LT + →`            | `F6`         | Simple Mail                       |
| `LT + ↓`            | `F7`         | Symbol Chat                       |
| `LT + ←`            | `F8`         | Team                              |
| `RT + LT + ↑`       | `F9`         | Team Log Window On/Off            |
| `RT + LT + →`       | `F10`        | Normal/Change Team Chat           |
| `RT + LT + ↓`       | `F11`        | Keyboard Control On/Off           |
| `RT + LT + ←`       | `F12`        | Main Menu                         |

### Example

In the screenshot below:

* **Shifta** is assigned to **Action Shortcut 1** and can be executed by pressing `RT + A`.
* **Deband** is assigned to **Action Shortcut 2** and can be executed by pressing `RT + X`.

[![Example](/assets/images/guides/ephinea-gamepad-setup-example.webp)](/assets/images/guides/ephinea-gamepad-setup-example.webp){:target="_blank"}

---

Step 1 - Add PSO to Steam
-------------------------

Adding PSO to Steam enables you to use Steam Input for your gamepad to remap buttons, and combinations of buttons, to keyboard keys. There are alternatives, such as [Joy2Key](https://joytokey.net){:target="_blank"}, but I found Steam to be the easiest to set up.

1. Click **Add a Non-Steam Game to my Library...**.
2. Browse to your PSO installation (e.g. `C:\Users\Username\EphineaPSO`).
3. Select online.exe.

[![Add a Non-Steam Game to my Library...](/assets/images/guides/ephinea-gamepad-setup-add-pso-to-steam.webp)](/assets/images/guides/ephinea-gamepad-setup-add-pso-to-steam.webp){:target="_blank"}

---

Step 2 - Enable Steam Input for PSO
-----------------------------------

Adding a gamepad to Steam is straightforward, so this step won't cover it. Once your gamepad is connected, you can enable Steam Input for PSO.

1. Turn on your gamepad.
2. Select PSO in your library.
3. Click the gamepad icon to the right of the **Play** button.
4. Click the **Enable Steam Input** button.

[![Enable Steam Input - Steps 2 and 3](/assets/images/guides/ephinea-gamepad-setup-enable-steam-input-for-pso-steps-2-3.webp)](/assets/images/guides/ephinea-gamepad-setup-enable-steam-input-for-pso-steps-2-3.webp){:target="_blank"}
[![Enable Steam Input - Step 4](/assets/images/guides/ephinea-gamepad-setup-enable-steam-input-for-pso-step-4.webp)](/assets/images/guides/ephinea-gamepad-setup-enable-steam-input-for-pso-step-4.webp){:target="_blank"}

---

Step 3 - Apply a Steam Button Layout
------------------------------------

I recommend applying the **Ephinea - All Action Shortcuts** community button layout instead of creating one from scratch. This layout has all of the above [Mappings](#mappings) pre-configured. You can then modify it to suit your preferences or specific gamepad.

1. Click **Gamepad**.
2. Click **Community Layouts** at the top.
3. Click **Show All Layouts** at the bottom.
4. Click **Ephinea - All Action Shortcuts**.
5. Click **Apply Layout**.

[![Create a Steam Button Layout - Step 1](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-step-1.webp)](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-step-1.webp){:target="_blank"}
[![Create a Steam Button Layout - Steps 2, 3, and 4](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-steps-2-4.webp)](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-steps-2-4.webp){:target="_blank"}
[![Create a Steam Button Layout - Step 5](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-step-5.webp)](/assets/images/guides/ephinea-gamepad-setup-apply-a-steam-button-layout-step-5.webp){:target="_blank"}

> If you can't find the layout on Steam, drop a message on our Discord or Forums for help.

---

Step 4 - Enable Gamepad
-----------------------

Enable your gamepad in the Ephinea Launcher (`Options › Page 4 › Use XInput for Gamepad`).

[![Enable Gamepad](/assets/images/guides/ephinea-gamepad-setup-enable-gamepad.webp)](/assets/images/guides/ephinea-gamepad-setup-enable-gamepad.webp){:target="_blank"}

---

Step 5 - Enable Analog Camera Control
-------------------------------------

By default, the game uses a *Chase Cam* that slowly adjusts behind your character as they move, but you can also use the gamepad's right stick to manually control the camera if you prefer, similar to modern third-person games.

1. Enable **Analog Camera Control** (`Options › Page 3 › Analog Camera Control › Enabled`).
2. Invert Analog X-Axis (`Options › Page 3 › Analog Sensitivity › Invert`).
3. Disable **Chase Cam** (`Options › Page 3 › Chase Cam › Disabled`).

[![Enable Analog Camera Control](/assets/images/guides/ephinea-gamepad-setup-improve-camera-control.webp)](/assets/images/guides/ephinea-gamepad-setup-improve-camera-control.webp){:target="_blank"}

---

Step 6 - Update Keyboard Mappings
---------------------------------

You'll need to update the in-game keyboard mappings, as the autorun `Q` key is not mapped by default (`Menu › Options › Keyboard Config › Custom`).

[![Update Keyboard Mappings](/assets/images/guides/ephinea-gamepad-setup-update-keyboard-mappings.webp)](/assets/images/guides/ephinea-gamepad-setup-update-keyboard-mappings.webp){:target="_blank"}

---

Step 7 - Update Gamepad Mappings
--------------------------------

You'll need to update the in-game button mappings (`Menu › Options › Pad Button Config`).

1. Set **Right Analog Left/Right** to `Right Stick`.
2. Set **Action Palette Middle / Decide** to `A`.
3. Set **Action Palette Right / < Cancel >** to `B`. Note: You can press `←` and `→` on the DPad to change this mapping's behaviour.
4. Set **Action Palette Left / < Detail >** to `X`. Note: Same as above.
5. Set **Action Palette Top** to `Y`.
6. Set **Menu Open/Close** to `Menu`.
7. Set **Prev Page / Camera** to `LB`.
8. Set **Next Page / Action Palette Change** to `RB`.

[![Update Gamepad Mappings](/assets/images/guides/ephinea-gamepad-setup-update-gamepad-mappings.webp)](/assets/images/guides/ephinea-gamepad-setup-update-gamepad-mappings.webp){:target="_blank"}

---

Step 8 - Enable Ctrl Shortcuts
------------------------------

Finally, you'll need to enable [Ctrl Shortcuts](https://wiki.pioneer2.net/w/Chat_commands#Other_commands){:target="_blank"} by typing `/shortcuts` in-game. This is primarily for the `View`/`Ctrl + M` map shortcut.

[![Enable Ctrl Shortcuts](/assets/images/guides/ephinea-gamepad-setup-enable-ctrl-shortcuts.webp)](/assets/images/guides/ephinea-gamepad-setup-enable-ctrl-shortcuts.webp){:target="_blank"}
[![Enable Ctrl Shortcuts - Ctrl + M Shortcut](/assets/images/guides/ephinea-gamepad-setup-enable-ctrl-shortcuts-ctrl-m-shortcut.webp)](/assets/images/guides/ephinea-gamepad-setup-enable-ctrl-shortcuts-ctrl-m-shortcut.webp){:target="_blank"}

---

Step 9 - Finished
-----------------

Your gamepad should now be fully configured for Ephinea with support for all action shortcuts and improved camera control. If you have any questions or run into issues, feel free to ask on our Discord or Forums.

---

FAQs
----

### What are the `Menu` and `View` gamepad buttons?

These are the two buttons in the middle of an Xbox Series X/S gamepad referred to as `Start` and `Select` in Steam Button Layouts.

### Can I use a PlayStation or other non-Xbox gamepad?

Yes. The guide uses an Xbox Series X/S gamepad as an example, but most modern controllers including PlayStation 5 DualSense are compatible with Steam Input. Some button labels may differ.

---

Original Keyboard Mappings
--------------------------

For reference, here are the original keyboard mappings.

[![Original Keyboard Mappings](/assets/images/guides/ephinea-gamepad-setup-original-keyboard-mappings.webp)](/assets/images/guides/ephinea-gamepad-setup-original-keyboard-mappings.webp){:target="_blank"}
