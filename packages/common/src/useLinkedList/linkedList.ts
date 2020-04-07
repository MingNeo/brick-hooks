class ListNode {
  prev = null
  next = null
  key = null
  constructor(key: any) {
    // 指向前一个节点
    this.prev = null
    // 指向后一个节点
    this.next = null
    // 节点的数据(或者用于查找的键)
    this.key = key
  }
}

interface Node extends ListNode {}

/**
 * 双向链表
 */
export default class LinkedList {
  head = null

  static createNode(key: any) {
    return new ListNode(key)
  }

  insert(node: Node) {
    node.prev = null
    node.next = this.head
    if (this.head) {
      this.head.prev = node
    }
    this.head = node
  }

  search(key: any) {
    let node = this.head
    while (node !== null && node.key !== key) {
      node = node.next
    }
    return node
  }

  delete(node: { prev: any; next: any }) {
    const { prev, next } = node
    delete node.prev
    delete node.next

    if (node === this.head) {
      this.head = next
    }

    if (prev) {
      prev.next = next
    }
    if (next) {
      next.prev = prev
    }
  }
}
