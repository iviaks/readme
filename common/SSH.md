# SSH

Secure Shell (SSH) is a cryptographic network protocol for operating network services securely over an unsecured network. The best known example application is for remote login to computer systems by users.

SSH provides a secure channel over an unsecured network in a client-server architecture, connecting an SSH client application with an SSH server. Common applications include remote command-line login and remote command execution, but any network service can be secured with SSH. The protocol specification distinguishes between two major versions, referred to as SSH-1 and SSH-2.

The most visible application of the protocol is for access to shell accounts on Unix-like operating systems, but it sees some limited use on Windows as well. In 2015, Microsoft announced that they would include native support for SSH in a future release.

SSH was designed as a replacement for Telnet and for unsecured remote shell protocols such as the Berkeley rlogin, rsh, and rexec protocols. Those protocols send information, notably passwords, in plaintext, rendering them susceptible to interception and disclosure using packet analysis. The encryption used by SSH is intended to provide confidentiality and integrity of data over an unsecured network, such as the Internet, although files leaked by Edward Snowden indicate that the National Security Agency can sometimes decrypt SSH, allowing them to read the contents of SSH sessions.

On 6 July 2017 the government transparency organization WikiLeaks confirmed that the US Central Intelligence Agency had developed tools that can be installed on computers running Microsoft Windows or GNU/Linux operating systems to intercept SSH connections started by SSH clients on the compromised systems.

## Connect to remote server

For connect to remote server, you should execute next command:

```bash
ssh <username>@<host> [-p <port>]
```

## Download files for remote server

For download file from remote server, you should execute next command:

```bash
scp <username>@<host>:<path-to-remote-file> <path-to-local-folder>
```

## Upload files to remote server

For upload file to remote server, you should execute next command:

```bash
scp <path-to-local-file> <username>@<host>:<path-to-remote-folder>
```
