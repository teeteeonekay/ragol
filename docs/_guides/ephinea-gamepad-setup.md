---
author: T_T1K
category: Ephinea
commentsUrl: https://forums.ragol.co.uk/showthread.php?tid=11698
coverImage: /assets/images/guides/ephinea-gamepad-setup/cover.webp
date: 2026-03-10
description: "Step-by-step guide to setting up a gamepad for Ephinea PSO with all action shortcuts and improved camera control."
---

Ephinea Gamepad Setup
=====================

[Ephinea Phantasy Star Online Blue Burst](https://ephinea.pioneer2.net){:target="_blank"} supports gamepads, but some additional configuration is needed to make them fully functional. This step-by-step guide shows you how to set up a gamepad for Ephinea, enabling all action shortcuts and improving camera control.

<div class="contents" markdown="1">

Contents
--------

* [Mappings](#mappings)
* [Step 1 - Add PSO to Steam](#step-1---add-pso-to-steam)
* [Step 2 - Enable Steam Input for PSO](#step-2---enable-steam-input-for-pso)
* [Step 3 - Apply a Steam Button Layout](#step-3---apply-a-steam-button-layout)
* [Step 4 - Enable Gamepad](#step-4---enable-gamepad)
* [Step 5 - Enable Analog Camera Control](#step-5---enable-analog-camera-control)
* [Step 6 - Enable Photon Blast Modifier](#step-6---enable-photon-blast-modifier)
* [Step 7 - Update Keyboard Mappings](#step-7---update-keyboard-mappings)
* [Step 8 - Update Gamepad Mappings](#step-8---update-gamepad-mappings)
* [Step 9 - Enable Ctrl Shortcuts](#step-9---enable-ctrl-shortcuts)
* [Step 10 - Finished](#step-10---finished)
* [FAQs](#faqs)
* [Original Keyboard Mappings](#original-keyboard-mappings)

</div>

---

Mappings
--------

Following this guide will result in the button mappings below. The triggers act as modifiers, allowing access to all ten action shortcuts while keeping the main action palette on the face buttons, similar to the original console controls.

### Movement

| Gamepad Button      | Keyboard Key | Mapping       |
| ------------------- | ------------ | ------------- |
| `Left Stick`        | `W``A``S``D` | Move          |
| `Left Stick Click`  | `Q`          | Auto Run      |
| `Right Stick`       |              | Adjust Camera |
| `Right Stick Click` | `↑`          | Center Camera |

### Action Palette

| Gamepad Button | Keyboard Key  | Mapping                           |
| -------------- | ------------- | --------------------------------- |
| `A`            | `↓`           | Action Palette Middle             |
| `B`            | `→`           | Action Palette Right              |
| `X`            | `←`           | Action Palette Left               |
| `Y`            | `End`         | Action Palette Top                |
| `RB`           | `Ctrl` / `→`  | Change Action Palette / Next Page |
| `LB`           | `Shift` / `←` | Photon Blast Modifier / Prev Page |

### Action Shortcuts

| Gamepad Button | Keyboard Key | Mapping            |
| -------------- | ------------ | ------------------ |
| `RT + A`       | `1`          | Action Shortcut 1  |
| `RT + X`       | `2`          | Action Shortcut 2  |
| `RT + B`       | `3`          | Action Shortcut 3  |
| `RT + Y`       | `4`          | Action Shortcut 4  |
| `LT + A`       | `5`          | Action Shortcut 5  |
| `LT + X`       | `6`          | Action Shortcut 6  |
| `LT + B`       | `7`          | Action Shortcut 7  |
| `LT + Y`       | `8`          | Action Shortcut 8  |
| `RT + LT + A`  | `9`          | Action Shortcut 9  |
| `RT + LT + X`  | `0`          | Action Shortcut 10 |

### Other

| Gamepad Button   | Keyboard Key | Mapping                                         |
| ---------------- | ------------ | ----------------------------------------------- |
| `Menu`           | `Home`       | Main Menu                                       |
| `View`           | `Ctrl + M`   | Map                                             |
| `RT + LT + B`    | `Esc`        | Cancel                                          |
| `RT + LT + Y`    | `Tab`        | Character Info. Change                          |
| `RT + ↑`         | `F1`         | Display F Key Functions                         |
| `RT + →`         | `F2`         | Equipment                                       |
| `RT + ↓`         | `F3`         | Technique                                       |
| `RT + ←`         | `F4`         | Mag                                             |
| `LT + ↑`         | `F5`         | Guild Card                                      |
| `LT + →`         | `F6`         | Simple Mail                                     |
| `LT + ↓`         | `F7`         | Symbol Chat                                     |
| `LT + ←`         | `F8`         | Team                                            |
| `RT + LT + ↑`    | `F9`         | Team Log Window On/Off                          |
| `RT + LT + →`    | `F10`        | Normal/Change Team Chat                         |
| `RT + LT + ↓`    | `F11`        | Keyboard Control On/Off                         |
| `RT + LT + ←`    | `F12`        | Main Menu                                       |
| `RT + LT + View` | `/bank`      | Toggles between character and shared item banks |

### Example

In the screenshot below:

* **Shifta** is assigned to **Action Shortcut 1** and can be executed by pressing `RT + A`.
* **Deband** is assigned to **Action Shortcut 2** and can be executed by pressing `RT + X`.

<div class="images" markdown="1">

* [![Mappings - Example](/assets/images/guides/ephinea-gamepad-setup/mappings/example.webp)](/assets/images/guides/ephinea-gamepad-setup/mappings/example.webp){:target="_blank"}

</div>

---

Step 1 - Add PSO to Steam
-------------------------

Adding PSO to Steam allows you to use Steam Input to map your gamepad to keyboard controls.

1. Click **Games** → **Add a Non-Steam Game to my Library...**.
2. Browse to your PSO installation (e.g. `C:\Users\Username\EphineaPSO`).
3. Select `online.exe`.
4. Find the new entry in your library.
5. Click **Manage** → **Properties**.
6. Rename the shortcut to **Phantasy Star Online Blue Burst**.

<div class="images" markdown="1">

* [![Add PSO to Steam - Add a Non-Steam Game](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/add-a-non-steam-game.webp)](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/add-a-non-steam-game.webp){:target="_blank"}
* [![Add PSO to Steam - Properties](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/properties.webp)](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/properties.webp){:target="_blank"}
* [![Add PSO to Steam - Shortcut](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/shortcut.webp)](/assets/images/guides/ephinea-gamepad-setup/add-pso-to-steam/shortcut.webp){:target="_blank"}

</div>

---

Step 2 - Enable Steam Input for PSO
-----------------------------------

Once your gamepad is connected, enable Steam Input for PSO.

1. Click **Controller Settings**.
2. Click **Enable Steam Input**.

{:.tip}
> Tip: Most modern controllers, including the PlayStation 5 DualSense, are supported.

<div class="images" markdown="1">

* [![Enable Steam Input for PSO - Controller Settings](/assets/images/guides/ephinea-gamepad-setup/enable-steam-input-for-pso/controller-settings.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-steam-input-for-pso/controller-settings.webp){:target="_blank"}
* [![Enable Steam Input for PSO - Enable Steam Input](/assets/images/guides/ephinea-gamepad-setup/enable-steam-input-for-pso/enable-steam-input.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-steam-input-for-pso/enable-steam-input.webp){:target="_blank"}

</div>

---

Step 3 - Apply a Steam Button Layout
------------------------------------

Apply the **Ephinea - All Action Shortcuts** community layout instead of creating one from scratch. This layout includes all the [mappings](#mappings) above and you can customise it later to suit your preferences.

1. Click **Gamepad**.
2. Click **Community Layouts** at the top.
3. Click **Show All Layouts** at the bottom.
4. Click **Ephinea - All Action Shortcuts**.
5. Click **Apply Layout**.

{:.tip}
> Tip: If you can't find the community button layout on Steam, make sure the shortcut is named **Phantasy Star Online Blue Burst** as shown in Step 1. If you still can't find it, ask for help on our Discord or the Forums.

<div class="images" markdown="1">

* [![Apply a Steam Button Layout - Layouts](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/layouts.webp)](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/layouts.webp){:target="_blank"}
* [![Apply a Steam Button Layout - Community Layouts](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/community-layouts.webp)](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/community-layouts.webp){:target="_blank"}
* [![Apply a Steam Button Layout - Layout](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/layout.webp)](/assets/images/guides/ephinea-gamepad-setup/apply-a-steam-button-layout/layout.webp){:target="_blank"}

</div>

---

Step 4 - Enable Gamepad
-----------------------

Enable your gamepad in the Ephinea Launcher (**Options** → **Page 4** → **Use XInput for Gamepad**).

{:.tip}
> Tip: If you’re on Steam Deck, you don’t need to enable this.

<div class="images" markdown="1">

* [![Enable Gamepad](/assets/images/guides/ephinea-gamepad-setup/enable-gamepad/options.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-gamepad/options.webp){:target="_blank"}

</div>

---

Step 5 - Enable Analog Camera Control
-------------------------------------

By default, the game uses a **Chase Cam** that slowly adjusts behind your character, but you can enable manual camera control using the right stick for a more modern feel.

1. Enable **Analog Camera Control** (**Options** → **Page 3** → **Analog Camera Control** → **Enabled**).
2. Invert Analog X-Axis (**Options** → **Page 3** → **Analog Sensitivity** → **Invert**).
3. Disable **Chase Cam** (**Options** → **Page 3** → **Chase Cam** → **Disabled**).

<div class="images" markdown="1">

* [![Enable Analog Camera Control](/assets/images/guides/ephinea-gamepad-setup/enable-analog-camera-control/options.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-analog-camera-control/options.webp){:target="_blank"}

</div>

---

Step 6 - Enable Photon Blast Modifier
-------------------------------------

By default, the game automatically overrides the secondary action palette mappings when your Mag's Photon Blasts are ready. This can prevent you from using actions assigned to those mappings, but you can make the overrides require the `Shift` key instead.

1. Select **Hold Button/Key to Enable Photon Blasts** (**Options** → **Page 4** → **Item Pickup and Photon Blast Usage** → **Hold Button/Key to Enable Photon Blasts**).
2. Enable **Hold Shift Key** (**Options** → **Page 4** → **Hold Shift Key**).

<div class="images" markdown="1">

* [![Enable Photon Blast Modifier](/assets/images/guides/ephinea-gamepad-setup/enable-photon-blast-modifier/options.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-photon-blast-modifier/options.webp){:target="_blank"}

</div>

---

Step 7 - Update Keyboard Mappings
---------------------------------

Update the in-game keyboard mappings (**Menu** → **Options** → **Keyboard Config** → **Custom**).

{:.tip}
> Tip: The `Q` key (Auto Run) is not mapped by default.

<div class="images" markdown="1">

* [![Update Keyboard Mappings](/assets/images/guides/ephinea-gamepad-setup/update-keyboard-mappings/keyboard-config.webp)](/assets/images/guides/ephinea-gamepad-setup/update-keyboard-mappings/keyboard-config.webp){:target="_blank"}

</div>

---

Step 8 - Update Gamepad Mappings
--------------------------------

Update the in-game button mappings (**Menu** → **Options** → **Pad Button Config**).

1. Set **Right Analog Left/Right** to `Right Stick`.
2. Set **Action Palette Middle / Decide** to `A`.
3. Set **Action Palette Right / < Cancel >** to `B`.
4. Set **Action Palette Left / < Detail >** to `X`.
5. Set **Action Palette Top** to `Y`.
6. Set **Menu Open/Close** to `Menu`.
7. Set **Prev Page / Camera** to `LB`.
8. Set **Next Page / Action Palette Change** to `RB`.

{:.tip}
> Tip: Use the D-pad (`←`/`→`) to adjust behaviour for some mappings.

<div class="images" markdown="1">

* [![Update Gamepad Mappings](/assets/images/guides/ephinea-gamepad-setup/update-gamepad-mappings/pad-button-config.webp)](/assets/images/guides/ephinea-gamepad-setup/update-gamepad-mappings/pad-button-config.webp){:target="_blank"}

</div>

---

Step 9 - Enable Ctrl Shortcuts
------------------------------

Finally, enable [Ctrl Shortcuts](https://wiki.pioneer2.net/w/Chat_commands#Other_commands){:target="_blank"} by typing `/shortcuts` in-game.

{:.tip}
> Tip: This is required for shortcuts like the map (`Ctrl + M`).

<div class="images" markdown="1">

* [![Enable Ctrl Shortcuts - Enabled](/assets/images/guides/ephinea-gamepad-setup/enable-ctrl-shortcuts/ctrl-shortcuts-enabled.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-ctrl-shortcuts/ctrl-shortcuts-enabled.webp){:target="_blank"}
* [![Enable Ctrl Shortcuts - Ctrl + M Shortcut](/assets/images/guides/ephinea-gamepad-setup/enable-ctrl-shortcuts/ctrl-m-shortcut.webp)](/assets/images/guides/ephinea-gamepad-setup/enable-ctrl-shortcuts/ctrl-m-shortcut.webp){:target="_blank"}

</div>

---

Step 10 - Finished
------------------

Your gamepad should now be fully configured for Ephinea with support for all action shortcuts and improved camera control.

---

<div class="faqs" markdown="1">

FAQs
----

### What are the `Menu` and `View` gamepad buttons?

These are the two centre buttons on an Xbox Series X/S gamepad, referred to as `Start` and `Select` in Steam Button Layouts.

### Can I use a Steam Deck or other non-Xbox controller?

Yes. The guide uses an Xbox Series X/S controller as an example. Steam Deck and most modern controllers, including the PlayStation 5 DualSense, are supported. Button labels may differ.

### I can't find the community button layout on Steam

Make sure the shortcut is named **Phantasy Star Online Blue Burst** as shown in Step 1. If you still can't find it, ask for help on our Discord or the Forums.

### I get the error "XInput support requires Windows 8 or greater. XInput will be disabled."

If you’re on Steam Deck, you don’t need to enable XInput.

</div>

---

Original Keyboard Mappings
--------------------------

For reference, here are the original keyboard mappings.

<div class="images" markdown="1">

* [![Original Keyboard Mappings](/assets/images/guides/ephinea-gamepad-setup/original-keyboard-mappings/keyboard-mappings.webp)](/assets/images/guides/ephinea-gamepad-setup/original-keyboard-mappings/keyboard-mappings.webp){:target="_blank"}

</div>
