import { Collider, Quaternion, Transform } from 'UnityEngine'
import { ZepetoCharacter } from 'ZEPETO.Character.Controller';
import { ZepetoScriptBehaviour } from 'ZEPETO.Script'

export default class TeleportScript extends ZepetoScriptBehaviour {
    public TeleportToLocation : Transform;

    Start() {    

    }

    OnTriggerEnter(other: Collider) {
        let zepetoCharacter: ZepetoCharacter = other.gameObject.GetComponent<ZepetoCharacter>();
        if (zepetoCharacter)
        {
            zepetoCharacter.Teleport(this.TeleportToLocation.position, Quaternion.identity);
        }
    }

}