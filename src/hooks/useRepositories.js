import { useEffect, useState } from "react";

const useRespositories = () => {
  const [repositories, setRepositories] = useState(null);

  const fetchRepositories = async () => {
    const response = await globalThis.fetch(
      //en vez de local host es la ip ya que desde el celular no puede acceder al local host
      "http://192.168.11.4:5000/api/repositories"
    );
    const json = await response.json();
    setRepositories(json);
  };

  useEffect(() => {
    fetchRepositories();
  }, []);

  const repositoriesNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return { repositories: repositoriesNodes };
};

export default useRespositories;
