import { db } from './firebase-config.js';
import { collection, getDocs, orderBy, query } from "https://www.gstatic.com/firebasejs/11.6.1/firebase-firestore.js";

document.addEventListener('DOMContentLoaded', async () => {
    const postsContainer = document.getElementById('blog-posts-container');
    const postsCollection = collection(db, 'posts');

    try {
        const q = query(postsCollection, orderBy('createdAt', 'desc'));
        const querySnapshot = await getDocs(q);

        if (querySnapshot.empty) {
            postsContainer.innerHTML = '<p class="text-center text-gray-400 col-span-full">Chưa có bài viết nào.</p>';
        } else {
            querySnapshot.forEach((doc) => {
                const post = doc.data();
                const postElement = document.createElement('div');
                postElement.classList.add('bg-gray-800', 'p-6', 'rounded-lg', 'shadow-lg');
                postElement.innerHTML = `
                    <h2 class="text-2xl font-bold text-teal-400 mb-2">${post.title}</h2>
                    <p class="text-gray-400 text-sm mb-4">Ngày đăng: ${new Date(post.createdAt.seconds * 1000).toLocaleDateString('vi-VN')}</p>
                    <p class="text-gray-300">${post.summary}</p>
                    <a href="post.html?id=${doc.id}" class="inline-block mt-4 text-teal-300 hover:text-teal-500 font-semibold">Đọc thêm...</a>
                `;
                postsContainer.appendChild(postElement);
            });
        }
    } catch (error) {
        console.error("Lỗi khi tải bài viết:", error);
        postsContainer.innerHTML = '<p class="text-center text-red-400 col-span-full">Đã xảy ra lỗi khi tải bài viết.</p>';
    }
});