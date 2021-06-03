public class Queue {
    Node rear;
    Node front;
    private int size; // Total number of element


    static class Node {
        int data;
        Node next;

        Node(int data) {
            this.data = data;
        }
    }

    public boolean isEmpty() {
        if (size == 0) {
            return true;
        }
        return false;
    }

    public void enqueue(int element) {
        Node newNode = new Node(element);

        if (front == null) {
            rear = newNode;
            front = newNode;
            size++;
        } else {
            rear.next = newNode;
            rear = rear.next;
            size++;
        }

    }

    public Node deQueue() {
        Node response = null;
        if (front != null) {
            if (front.next != null) {
                response = new Node(front.data);
                front = front.next;
                size--;
            } else {
                response = new Node(front.data);
                front = null;
                rear = null;
                size--;
            }
        }
        return response;
    }

    public Node peek() {
        Node response = null;
        if (!isEmpty()) {
            response = new Node(front.data);
        }
        return response;
    }


    public int size() {
        return size;
    }

    public static void main(String[] args) {
        Queue queue = new Queue();
        queue.enqueue(10);
        queue.enqueue(20);
        queue.enqueue(30);

        System.out.println(queue.size());
        System.out.println(queue.deQueue().data);
        System.out.println(queue.isEmpty());
        System.out.println(queue.size);
        System.out.println(queue.peek().data);
    }
}