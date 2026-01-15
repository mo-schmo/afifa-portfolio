export function portal(node: HTMLElement, target: HTMLElement | string = "body") {
    async function update(newTarget: HTMLElement | string) {
        let targetNode: HTMLElement | null;
        if (typeof newTarget === "string") {
            targetNode = document.querySelector(newTarget);
            if (newTarget === "body") {
                targetNode = document.body;
            }
        } else {
            targetNode = newTarget;
        }

        if (targetNode) {
            targetNode.appendChild(node);
        }
    }

    update(target);

    return {
        update,
        destroy() {
            if (node.parentNode) {
                node.parentNode.removeChild(node);
            }
        },
    };
}
