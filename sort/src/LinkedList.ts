import { Sorter, Sortable } from './Sorter';

class Node {
  next: Node | null = null;
  constructor(public data: number) {}
}

export class LinkedList extends Sorter implements Sortable {
  head: Node | null = null;
  private size: number = 0;

  //Adding a new element at end of LinkedList
  add(data: number): void {
    const node = new Node(data);

    if (!this.head) {
      this.head = node;
      this.size++;
      return;
    }

    let tail = this.head;

    while (tail.next) {
      tail = tail.next;
    }

    tail.next = node;
    this.size++;
  }

  //Getting the lenght of LinkedList
  get length(): number {
    return this.size;
  }

  //Getting an especific AT an INDEX position of LinkedList
  at(index: number): Node {
    if (!this.head) {
      throw new Error('Index out of bounds');
    }

    let counter = 0;
    let node: Node | null = this.head;
    while (node) {
      if (counter === index) {
        return node;
      }

      counter++;
      node = node.next;
    }

    throw new Error('Index out of bounds');
  }

  /*  
    The Sortable Intercace Methods.
  */

  // Comparing two differents nodes.
  compare(leftIndex: number, rightIndex: number): boolean {
    if (!this.head) {
      throw new Error('List is empty');
    }

    return this.at(leftIndex).data > this.at(rightIndex).data;
  }

  // Swap VALUE of two given nodes.
  swap(leftIndex: number, rightIndex: number): void {
    const leftNode = this.at(leftIndex);
    const rightNode = this.at(rightIndex);

    const leftHand = leftNode.data;
    leftNode.data = rightNode.data;
    rightNode.data = leftHand;
  }

  print(): void {
    let arr: number[] = [];

    if (!this.head) {
      return;
    }

    let node: Node | null = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    console.log(arr);
  }
}
