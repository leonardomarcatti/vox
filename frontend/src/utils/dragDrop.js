const handleDragEnd = async (event, revalidate) => {
   console.log("EVENT:", event);

   // soltou fora de qualquer coluna
   if (event.canceled) return;

   const taskId = event.operation?.source?.id;
   const newStatus = event.operation?.target?.id;

   console.log("Task:", taskId);
   console.log("Novo status:", newStatus);

   if (!taskId || !newStatus) return;

   try {
      const response = await fetch("/api/updateStatus", {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
         },
         body: JSON.stringify({
            task_id: taskId,
            status: newStatus,
         }),
      });

      console.log("STATUS RESPONSE:", response.status);

      if (response.ok) {
         revalidate();
      }
   } catch (err) {
      console.error("Erro ao atualizar status:", err);
   }
};

export { handleDragEnd };