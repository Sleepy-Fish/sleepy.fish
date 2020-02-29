## Doing things
Lighting is a pretty dope 

### Ray Casting
---
Ray casting is a core components of computer graphics. The idea is simple but extremely useful and with modern engines can be a very low cost method of mimicing more complex graphical phenomena. In this post we show we used some pretty simple ray casting algorithms to build a dynamic lighting system for our 2D game The Pit. But first lets go over some basics of how you can use Ray Casting in the Unity engine.

::: frame black
![Ray Casting](static/img/blog/2d-fov-lighting/simple-raycasting.gif)
---
**Object Awareness demonstrated using Ray Casting in 2D demo.**
:::

<br>

### Set Up

If you're reading a post about Field of View, chances are you have your own way you want to implement this into a game so I will waste the minimal amount of time settings up some 2D platformer boilerplate. When we get to it I will try to keep the Field Of View logic sufficiently abstract and pluggable into any Unity GameObject you want. I encourage you to skip this step if you already have a working platform style game boilerplate because I will be cutting many corners. Otherwise, feel free to follow along or clone my boilerplate from github.

[Unity Platformer Boilerplate](https://github.com/Sleepy-Fish/fov-tutorial/releases/tag/Setup)

##### 1. Add A Scene
Right click your assets to open the context menu, select **Create > Scene**. I named my scene Demo. Open this new scene if your project is 2D you should be looking at a blank scene with just the default Main Camera object in it.

##### 2. Add Some Sprites
Right click your assets to open the context menu, select **Create > Sprites > Square** and **Create > Sprites > Circle**. I kept it simple and named these assets Square and Circle respectively.

##### 3. Create A Controller Script
How you want to setup the player controller and movement is totally up to you but having something in place before you start is always good so you can demo as you go. I wrote a very rough controller that provides basic jumping and horizontal movement with whatever input your Unity Project is mapped to use. Right click your assets to open the context menu, select **Create > C# Script** and add the replace its content with the following code:

``` csharp
using UnityEngine;

public class Controller : MonoBehaviour {
  Rigidbody2D body;
  float runSpeed = 4f;
  float jumpSpeed = 7f;
  float rotationSpeed = 0.2f;

  void Start() {
    body = GetComponent<Rigidbody2D>();
  }

  void Update() {
    // Horizontal Velocity
    float hv = Input.GetAxis("Horizontal") * runSpeed;
    // Vertical Velocity
    float vv = body.velocity.y;
    // Jump Control Input
    if (Input.GetKeyDown("space")) vv += jumpSpeed;
    // Update Player Velocity
    body.velocity = new Vector2(hv, vv);
    // Keey Player Upright
    body.rotation = Mathf.Lerp(body.rotation, 0f, rotationSpeed);
  }
}

```

##### 4. Create Some GameObjects

**Create a Player GameObject**
This is what you attach your controller to and will eventually be the focal point for our FOV class

::: frame black
![Player Settings](static/img/blog/2d-fov-lighting/player-settings.png =350x)
---
**Player GameObjects Unity Settings.**
:
 - Transform: (Scale: {y: 2})
 - Capsule Collider 2D: (Default Settings)
 - Rigidbody 2D: (Default Settings)
 - Sprite Renderer: (Sprite: Circle, Color: Red)
 - Controller Script
:::

**Create a Level GameObject**
This is just a container for all your level obstacles

::: frame black
![Player Sprite Settings](static/img/blog/2d-fov-lighting/level-settings.png =350x)
---
**Components:**
 - Transorm: (Default Settings)
:::

**Create an Items GameObject**
This is just a container for all your items that may be in your level

::: frame black
![Player Sprite Settings](static/img/blog/2d-fov-lighting/items-settings.png =350x)
---
**Components:**
 - Transorm: (Default Settings)
:::



##### 5. Create Some Prefabs

**Create an Obstacle Prefab**
You can place a couple of these as children of Level when you're done (e.g. Floor, Wall, Platform, etc)

::: frame black
![Player Sprite Settings](static/img/blog/2d-fov-lighting/obstacle-settings.png =350x)
---
**Components:**
 - Transorm: (Default Settings)
 - Box Collider 2D (Default Settings)
 - Rigidbody 2D: (Type: static)
 - Sprite Renderer (Sprite: Square, Color: Black)
:::

**Create an Item Prefab**
These could be items or power ups in your game. In other words, they can be detected by the player but they aren't collided with so they will not need a Rigidbody component.

::: frame black
![Player Sprite Settings](static/img/blog/2d-fov-lighting/item-settings.png =350x)
---
**Components:**
 - Transorm: (Default Settings)
 - Circle Collider 2D (IsTrigger: true)
 - Sprite Renderer (Sprite: Circle, Color: Blue)
:::

You should now have all the objects you need in place to build yourself a nice little scene! Just drag some Object prefabs into your level object and a few Item prefabs into you Items object, rearrange and resize them to your living and build yourself a little playground! You should be able to hop about the scene if you play at this point.

::: frame black
![Player Sprite Settings](static/img/blog/2d-fov-lighting/setup-complete.gif =350x)
---
**Game of the Year award, here we come!**
:::

### Object Awareness

Add Sensor script
``` csharp
using UnityEngine;

public class Sensor : MonoBehaviour {
    public float viewRadius = 4f;

    void Update() {
        
    }
}
```

Add editor script
``` csharp
using UnityEngine;
using UnityEditor;

[CustomEditor (typeof (Sensor))]
public class SensorEditor : Editor {
    void OnSceneGUI() {
        Sensor sensor = (Sensor)target;
        Handles.DrawWireDisc(sensor.transform.position, Vector3.forward, sensor.viewRadius);
    }
}
```

Attach script to player object.

::: frame black
![View Radius](static/img/blog/2d-fov-lighting/sensor-view-radius.png =450x)
---
**Sensory View Radius as seen in the editor**
:::

Add layers

``` csharp
public LayerMask itemLayer;
public LayerMask obstacleLayer;
```

Add new layers to the Level and Items

::: frame black
![Add New Layer](static/img/blog/2d-fov-lighting/add-layer.png =350x)
---
**Layers allow you to interact with specific groups of game objects**
:::

Assign the new layers to public variables

::: frame black
![Add New Layer](static/img/blog/2d-fov-lighting/set-layers.png =350x)
---
**Make the layers accessible in your sensor instance**
:::

Add some basic awareness script

``` csharp
// ... In Sensor class
  public List<GameObject> sensed = new List<GameObject>();

  void Sense () {
    sensed.Clear();
    Collider2D[] inRange = Physics2D.OverlapCircleAll(transform.position, viewRadius, itemLayer);
    foreach (Collider2D collider in inRange) {
      GameObject target = collider.gameObject;
      sensed.Add(target);
    }
  }

  void Update() {
    Sense();
  }
```

And to the editor

``` csharp
// ... In SensorEditor OnSceneGUI function
  foreach (GameObject target in sensor.sensed) {
    Handles.DrawLine(sensor.transform.position, target.transform.position);
  }
```

::: frame black
![Object Awareness](static/img/blog/2d-fov-lighting/object-awareness.gif)
---
**White lines represent what the player is "Aware" of an item**
:::

Now we tackle the ray casting

Then make it do this:

::: frame black
![Add New Layer](static/img/blog/2d-fov-lighting/smoothlight-mesh.gif =350x)
---
**Some stuff happens in between**
:::
