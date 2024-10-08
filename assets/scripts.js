document.addEventListener("DOMContentLoaded", function() {
    const socialLinks = document.querySelectorAll(".social-link");

    socialLinks.forEach(link => {
        link.addEventListener("click", function(event) {
            const platform = this.getAttribute("data-platform");
            let url;

            switch(platform) {
                case "Facebook":
                    url = "https://www.facebook.com/sicapremex/";
                    break;
                case "Twitter":
                    url = "https://x.com/sicapremex";
                    break;
                case "Instagram":
                    url = "https://www.instagram.com/sicapremex/";
                    break;
                case "LinkedIn":
                    url = "https://www.linkedin.com/company/sicapre-mx/posts/?feedView=all&viewAsMember=true";
                    break;
                case "Website":
                    url = "https://sicapre.com/";
                    break;
                case "WhatsApp":
                    const whatsappMenu = this.querySelector(".whatsapp-menu");
                    whatsappMenu.style.display = whatsappMenu.style.display === "block" ? "none" : "block";
                    event.stopPropagation();
                    return;
                default:
                    url = "#";
            }

            window.open(url, "_blank");
        });
    });

    document.addEventListener("click", function(event) {
        if (!event.target.closest(".social-link[data-platform='WhatsApp']")) {
            document.querySelectorAll(".whatsapp-menu").forEach(menu => {
                menu.style.display = "none";
            });
        }
    });
});
