---
title: 数据结构/Data Structure
tags: [数据结构]
---

常用数据结构

- [数组、字符串](数据结构/a1)
- [顺序表](数据结构/a1)
- [链表](数据结构/a2)
- [队列](数据结构/a3)
- [双端队列](数据结构/a1)
- [栈](数据结构/a4)
- [树](数据结构/a5)
- [二叉树](数据结构/a6)
- [堆](数据结构/a7)

高级数据结构

- 完全二叉树
- 二叉搜索树
- [优先队列](数据结构/a1)
- [图](数据结构/a1)
- [前缀树](数据结构/a1)
- [线段树](数据结构/a1)
- [树状数组](数据结构/a1)

## 线性表

- 线性表是最基本、最简单、也是最常用的一种数据结构。
- 线性表中数据元素之间的关系是一对一的关系，即除了第一个和最后一个数据元素之外，其它数据元素都是首尾相接的（注意，这句话只适用大部分线性表，而不是全部。比如，循环链表逻辑层次上也是一种线性表（存储层次上属于链式存储），但是把最后一个数据元素的尾指针指向了首位结点）。
<!-- more -->
- 我们说“线性”和“非线性”，只在**逻辑层次**上讨论，而不考虑存储层次，所以双向链表和循环链表依旧是线性表。
- 在数据结构逻辑层次上细分，线性表可分为**一般线性表**和**受限线性表**。一般线性表也就是我们通常所说的“线性表”，可以自由的删除或添加结点。受限线性表主要包括**栈**和**队列**，受限表示对结点的操作受限制。
- 线性表的逻辑结构简单，便于实现和操作。因此，线性表这种数据结构在实际应用中是广泛采用的一种数据结构。

### 顺序表---顺序存储的线性表

- 顺序表是在计算机内存中以数组的形式保存的线性表，线性表的顺序存储是指用一组地址连续的存储单元依次存储线性表中的各个元素、使得线性表中在逻辑结构上相邻的数据元素存储在相邻的物理存储单元中，即通过数据元素物理存储的相邻关系来反映数据元素之间逻辑上的相邻关系，采用顺序存储结构的线性表通常称为顺序表。顺序表是将表中的结点依次存放在计算机内存中一组地址连续的存储单元中。

### 链表---链式存储的线性表

- 链表（Linked list）是一种常见的基础数据结构，是一种线性表，但是并不会按线性的顺序存储数据，而是在每一个节点里存到下一个节点的指针(Pointer)。由于不必须按顺序存储，链表在插入的时候可以达到 O(1)的复杂度，比另一种线性表顺序表快得多，但是查找一个节点或者访问特定编号的节点则需要 O(n)的时间，而顺序表相应的时间复杂度分别是 O(logn)和 O(1)。
- 使用链表结构可以克服数组链表需要预先知道数据大小的缺点，链表结构可以充分利用计算机内存空间，实现灵活的内存动态管理。但是链表失去了数组随机读取的优点，同时链表由于增加了结点的指针域，空间开销比较大。
- 在计算机科学中，链表作为一种基础的数据结构可以用来生成其它类型的数据结构。链表通常由一连串节点组成，每个节点包含任意的实例数据（data fields）和一或两个用来指向上一个/或下一个节点的位置的链接（"links"）。链表最明显的好处就是，常规数组排列关联项目的方式可能不同于这些数据项目在记忆体或磁盘上顺序，数据的访问往往要在不同的排列顺序中转换。而链表是一种自我指示数据类型，因为它包含指向另一个相同类型的数据的指针（链接）。链表允许插入和移除表上任意位置上的节点，但是不允许随机存取。链表有很多种不同的类型：单向链表，双向链表以及循环链表。

### 栈

- 栈是限定仅在表尾进行插入和删除操作的线性表。“栈”者，存储货物或供旅客住宿的地方，可引申为仓库、中转站，引入到计算机领域里，就是指数据暂时存储的地方，所以才有进栈、出栈的说法。
- 栈作为一种数据结构，是一种只能在一端进行插入和删除操作的特殊线性表。它按照后进先出的原则存储数据，先进入的数据被压入栈底，最后的数据在栈顶，需要读数据的时候从栈顶开始弹出数据（最后一个数据被第一个读出来）。栈具有记忆作用，对栈的插入与删除操作中，不需要改变栈底指针。
- 栈是允许在同一端进行插入和删除操作的特殊线性表。允许进行插入和删除操作的一端称为栈顶(top)，另一端为栈底(bottom)；栈底固定，而栈顶浮动；栈中元素个数为零时称为空栈。插入一般称为进栈（PUSH），删除则称为退栈（POP）。栈也称为后进先出表。
- 栈可以用来在函数调用的时候存储断点，做递归时要用到栈！

### 队列

- 队列是一种特殊的线性表，特殊之处在于它只允许在表的前端（front）进行删除操作，而在表的后端（rear）进行插入操作，和栈一样，队列是一种操作受限制的线性表。进行插入操作的端称为队尾，进行删除操作的端称为队头。

## 树

- 在图论中，树（英语：Tree）是一种无向图（undirected graph），其中任意两个顶点间存在唯一一条路径。或者说，只要没有回路的连通图就是树。森林是指互相不交并树的集合。树图广泛应用于计算机科学的数据结构中，比如二叉查找树，堆，Trie 树以及数据压缩中的霍夫曼树等等。

### 二叉树

- 在计算机科学中，二叉树是每个结点最多有两个子树的树结构。通常子树被称作“左子树”（left subtree）和“右子树”（right subtree）。二叉树常被用于实现二叉查找树和二叉堆。
- 一棵深度为 k，且有 2^k-1 个节点的二叉树，称为满二叉树。这种树的特点是每一层上的节点数都是最大节点数。而在一棵二叉树中，除最后一层外，若其余层都是满的，并且最后一层或者是满的，或者是在右边缺少连续若干节点，则此二叉树为完全二叉树。具有 n 个节点的完全二叉树的深度为 floor(log2n)+1。深度为 k 的完全二叉树，至少有 2k-1 个叶子节点，至多有 2k-1 个节点。

### 堆

- 堆是一类特殊的树，堆的通用特点就是父节点会大于或小于所有子节点。
- 如果一棵有根树的每一个结点至多有两个儿子，那么这棵树称为二叉树。
- 如果一棵二叉树的每一个节点都带着一个值，且父亲的值总是比儿子的值要大，我们称这棵树为大顶二叉堆，如果是父亲比儿子都要小，那就是小顶二叉堆，统称为二叉堆。(其实一般都把二叉两个字省略掉，毕竟通常说的堆都是二叉堆，然而堆不止二叉堆)。这一个良好的性质注定了堆可以用来当作优先队列使用。

## 图

- 树有环了就是图。
- 由顶点和连接每对顶点的边所构成的图形就是图。
- 而我们还可以给边加上一个值。这个值叫作边的“权重”或者“权”，加了权的图被称为“加权图”。没有权的边只能表示两个顶点的连接状态，而有权的边就可以表示顶点之间的“连接程度”。
- 当我们想在路线图中表示该路线只能单向行驶时，就可以给边加上箭头，而这样的图就叫作“有向图”。比如网页里的链接也是有方向性的，用有向图来表示就会很方便。

### 广度优先搜索

- 广度优先搜索是一种对图进行搜索的算法。
- 假设我们一开始位于某个顶点（即起点），此时并不知道图的整体结构，而我们的目的是从起点开始顺着边搜索，直到到达指定顶点（即终点）。在此过程中每走到一个顶点，就会判断一次它是否为终点。广度优先搜索会优先从离起点近的顶点开始搜索。
- 广度优先搜索的特征为从起点开始，由近及远进行广泛的搜索。因此，目标顶点离起点越近，搜索结束得就越快。

### 深度优先搜索

- 深度优先搜索和广度优先搜索一样，都是对图进行搜索的算法，目的也都是从起点开始搜索直到到达指定顶点（终点）。深度优先搜索会沿着一条路径不断往下搜索直到不能再继续为止，然后再折返，开始搜索下一条候补路径。
- 深度优先搜索的特征为沿着一条路径不断往下，进行深度搜索。虽然广度优先搜索和深度优先搜索在搜索顺序上有很大的差异，但是在操作步骤上却只有一点不同，那就是选择哪一个候补顶点作为下一个顶点的基准不同。
- 广度优先搜索选择的是最早成为候补的顶点，因为顶点离起点越近就越早成为候补，所以会从离起点近的地方开始按顺序搜索；而深度优先搜索选择的则是最新成为候补的顶点，所以会一路往下，沿着新发现的路径不断深入搜索。

### 最短路径

- 最短路径问题就是在加权图指定了起点和终点的前提下，寻找从起点到终点的路径中权重总和最小的那条路径。

#### 贝尔曼-福特算法（Bellman-Ford）

- 它的原理是对图进行 V-1 次松弛操作，得到所有可能的最短路径。
- 其优于迪科斯彻算法的方面是边的权值可以为负数、实现简单，缺点是时间复杂度过高，高达 O(VE)。但算法可以进行若干种优化，提高了效率。

#### 狄克斯特拉算法（Dijkstra）

- 若从 S 点到 T 点有一条最短的路径，则该路径上的任何点到 S 的距离都是最短的。
- 狄克斯特拉算法会从离起点近的顶点开始，按顺序求出起点到各个顶点的最短路径。

#### A\*算法（A-Star）

- A\*算法是一种静态路网中求解最短路最有效的方法。
- A\*算法在游戏编程中经常被用于计算敌人追赶玩家时的行动路线等，但由于该算法的计算量较大，所以可能会使游戏整体的运行速度变慢。因此在实际编程时，需要考虑结合其他算法，或者根据具体的应用场景做出相应调整。