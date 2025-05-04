'use client';

import { getAllPosts } from '@/api/getAllPosts';
import BlogList from '@/components/BlogList';
import ContainerDefault from '@/components/ContainerDefault';
import ServiceContainers from '@/components/ServiceContainers';
import Title from '@/components/Texts/title';
import { useEdit } from '@/context/EditContext';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';

export default function Dashboard() {
  const [posts, setPosts] = React.useState<any[]>([]);
  const history = useRouter();

  const { setBlogEdit } = useEdit();

  const handleClickBlog = (item: any) => {
    setBlogEdit(item);
    history.push('dashboard/nova-postagem');
  };

  const getPosts = async () => {
    const getPost = await getAllPosts();

    if (!getPost.error && getPost.posts.length > 0) {
      setPosts(getPost.posts);
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className=" w-full h-screen  flex flex-col justify-start">
      <Title title="Overview" className="text-black font-bold text-xl text-start pb-12" />
      {/* O conteúdo que pode ser rolado */}
      <div className="flex-grow overflow-auto space-y-4 w-full">
        <ServiceContainers />

        <ContainerDefault title="Blog / postagens" redirect="/nova-postagem">
          {posts.length > 0 ? (
            posts.map((item: any, index: number) => (
              <BlogList {...item} key={index} onClick={() => handleClickBlog(item)} />
            ))
          ) : (
            <div>
              <p>Nenhum post encontrado</p>{' '}
            </div>
          )}
          {/* <BlogList />
          <BlogList />
          <BlogList />
          <BlogList />
          <BlogList /> */}
          <div></div>
        </ContainerDefault>
      </div>
    </div>
  );
}
